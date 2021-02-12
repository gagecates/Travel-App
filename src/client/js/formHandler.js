import {checkForURL} from './URLChecker.js'

const apiKey = process.env.API_KEY;
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
const lang = '&lang=en';


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let articleLink = document.getElementById('name').value
    if (checkForURL(articleLink)) {

      console.log("::: Form Submitted :::")

      postData('http://localhost:8081/analyse', {text: articleLink})

      .then(newData => {

        document.getElementById('score tag').innerHTML = `Score Tag: ${newData.score_tag}`
        document.getElementById("agreement").innerHTML = `Agreement: ${newData.agreement}`
        document.getElementById("subjectivity").innerHTML = `Subjectivity: ${newData.subjectivity}`
        document.getElementById("confidence").innerHTML = `Confidence: ${newData.confidence}`
        document.getElementById("irony").innerHTML = `Irony: ${newData.irony}`

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
