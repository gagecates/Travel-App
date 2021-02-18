import {checkForDest} from './getCoords.js'
import {updateUICities} from './updateUICities.js'
import {updateUIWeather} from './updateWeather.js'


async function handleSubmit(event) {

  const dest = document.getElementById('dest').value
  const arival = document.getElementById('arival').value
  const duration = document.getElementById('duration').value

  const coords = await getCoordinates(dest)






















    postFormData('http://localhost:8000/getCities', {dest: userDest, date: userDate})

    .then(cities => {
      cityList = updateUICities(cities)
      cityList.addEventListener('click', getWeather)

    }) 


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
      const newData = await response.json();
      updateUIWeather(newData);

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
