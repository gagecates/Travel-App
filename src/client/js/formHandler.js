import {checkForDest} from './DestChecker.js'
import {updateUICities} from './updateUICities.js'
import {getCoordinates} from './getCoordinates.js'


function handleSubmit(event) {
    event.preventDefault()
    console.log('working thus far lol')

    // check what text was put into the form field
    let userDest = document.getElementById('dest').value
    let userDate = document.getElementById('arival').value
    if (checkForDest(userDest)) {

      console.log("::: Form Submitted :::")

      postData('http://localhost:8000/analyze', {dest: userDest, date: userDate})

        .then(cities => {
          return updateUICities(cities)

        })

        .then(cityList => {
          chooseCity(cityList)

        })


    } else {
      alert("Sorry that not a valid destination!")

    }
    
}


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
