import {checkForDest} from './DestChecker.js'
import {updateUICities} from './updateUICities.js'
import {updateWeather} from './updateWeather.js'

let cityList = ''

function handleSubmit(event) {
    event.preventDefault()

    let userDest = document.getElementById('dest').value
    let userDate = document.getElementById('arival').value

    console.log("::: Form Submitted :::")

    postFormData('http://localhost:8000/getCities', {dest: userDest, date: userDate})

    .then(cities => {
      cityList = updateUICities(cities)
      cityList.addEventListener('click', getWeather)

    })
}

const getWeather = async (evt) => {

  let city = {city: evt.target.innerHTML}
  let url = 'http://localhost:8000/getWeather'

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(city), // body data type must match "Content-Type" header        
  });

    try {
      const weatherData = await response.json();
      updateUIWeather(weatherData, city);

    }catch(error) {
      console.log("error", error);
    }
};


const postFormData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        return newData

      }catch(error) {
        console.log("error", error);
      }
};


export { handleSubmit }
