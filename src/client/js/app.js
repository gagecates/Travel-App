import {checkForDest} from './DestChecker.js'
import {updateUICities} from './updateUICities.js'

let cityList = ''

function handleSubmit(event) {
    event.preventDefault()

    let userDest = document.getElementById('dest').value
    let userDate = document.getElementById('arival').value

    console.log("::: Form Submitted :::")

    postData('http://localhost:8000/analyze', {dest: userDest, date: userDate})

      .then(cities => {
        cityList = updateUICities(cities)
        cityList.addEventListener('click', getCoordinates)

      })

}

const getCoordinates = async (evt) => {

  console.log(evt.target.innerHTML)


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
