import {checkForDest} from './DestChecker.js'

const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const lang = '&lang=en';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let userDest = document.getElementById('dest').value
    let userDate = document.getElementById('date').value
    if (checkForDest(userDest)) {

      console.log("::: Form Submitted :::")

      postData('http://localhost:8081/analyse', {dest: userDest, date: userDate})

      .then(newData => {
        updateUI(newData)
      })

    } else {
      alert("Sorry that's not a valid URL!")

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
