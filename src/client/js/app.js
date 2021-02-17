import {checkForDest} from './DestChecker.js'
import {updateUICities} from './updateUICities.js'

let cityList = ''

function handleSubmit(event) {
    event.preventDefault()

    let userDest = document.getElementById('dest').value
    let userDate = document.getElementById('arival').value

    console.log("::: Form Submitted :::")

    postData('http://localhost:8000/getCities', {dest: userDest, date: userDate})

      .then(cities => {
        cityList = updateUICities(cities)
        cityList.addEventListener('click', function (){
          const cityName = event.target.innerHTML
          getWeather('http://localhost:8000/getWeather', cityName)

        })

      })

}

const getWeather = async ( url = '', cityName) => {

  const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(cityName), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      return newData

    }catch(error) {
      console.log("error", error);
    }
};


const postData = async ( url = '', data = {})=>{

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
