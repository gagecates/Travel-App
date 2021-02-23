const fetch = require("node-fetch");
const dotenv = require('dotenv')
dotenv.config()

// Require Express to run server and routes
var express = require('express');
var path = require('path')

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
var cors = require('cors');
const { response } = require('express');
app.use(cors());

// Initialize the main project folder
app.use(express.static('dist'));


const port = 8000;


module.exports = app.listen(port)
//module.exports = app

// Setup Server



// API info
const geoUser = process.env.geoUser;
const weatherBitKey = process.env.weatherBitKey;
const pixabayKey = process.env.pixabayKey;

let projectData = {}
const genericPhotoURL = 'https://locationindie.com/wp-content/uploads/2018/01/travel-2569522_1920.jpg';


// return home page to client
app.get('/', function (req, res) {
  res.sendFile(path.resolve('src/client/views/index.html'))
})


// test enpoint for jest
app.get('/test', async (req, res) => {
  res.json({message: 'pass!'})
})


// get coordinates from users city via geonames API
app.post('/coordinates', async function (req, res) {
 
  const dest = req.body.dest
  const geoURL = `http://api.geonames.org/searchJSON?q=${dest}&maxRows=10&username=+${geoUser}`;
  const response = await fetch(geoURL)
  
    try {
      const responseJSON = await response.json()

      const data = {}

      data.city = responseJSON.geonames[0].name
      data.state = responseJSON.geonames[0].adminName1
      data.lat = responseJSON.geonames[0].lat
      data.lng = responseJSON.geonames[0].lng

      res.send(data)

    }  catch(error) {
      console.log('error')
      console.log("error", error);
  
    }
})

// get weather info using coordinates via weatherbit API
app.post('/getWeather', async function (req, res) {

  const lat = req.body.lat
  const lng = req.body.lng
  const arival = req.body.arival
  const date = new Date()

  const weatherURL = `http://api.weatherbit.io/v2.0/forecast/daily?NC&key=${weatherBitKey}&lat=${lat}&lon=${lng}&units=I`;
  const response = await fetch(weatherURL)
    
    try {
      const responseJSON = await response.json()
      data = {}
      const arrivalDate = new Date(arival)
      const rightNow = new Date()
      const msFromToday = arrivalDate - rightNow
      const daysFromToday = Math.ceil(msFromToday / (60*60*24*1000))
      
      if (daysFromToday >= 7) {
        data.date = responseJSON.data[daysFromToday].datetime
        data.hiTemp = Math.round(responseJSON.data[daysFromToday].high_temp)
        data.loTemp = Math.round(responseJSON.data[daysFromToday].low_temp)
        data.wind = Math.round(responseJSON.data[daysFromToday].wind_spd)

      } else {
        data.date = responseJSON.data[0].datetime
        data.hiTemp = Math.round(responseJSON.data[0].high_temp)
        data.loTemp = Math.round(responseJSON.data[0].low_temp)
        data.wind = Math.round(responseJSON.data[0].wind_spd)
      
      }

      res.send(data)

    }  catch(error) {
      console.log('error')
      console.log("error", error);
  
    }
})

// fetch picture of destination city via pixabay API
app.post('/getPic', async function (req, res) {
  const city = req.body.dest
  const pixURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${city}&image_type=photo&category=travel`;
  const response = await fetch(pixURL)
  
    try {
      const responseJSON = await response.json()
      const photo = {}

      if (responseJSON.hits < 1) {
        photo.photo = genericPhotoURL

      }else {
        const photoURL = responseJSON.hits[0].webformatURL
        photo.photo = photoURL

      }

      res.send(photo)
    
    }  catch(error) {
      console.log("error", error);
  
    }
})


app.post('/addData', async function (req, res) {

  projectData.city = req.body.city
  projectData.state = req.body.state
  projectData.arival = req.body.arival
  projectData.hiTemp = req.body.hiTemp
  projectData.loTemp = req.body.loTemp
  projectData.wind = req.body.wind
  projectData.pic = req.body.pic

  res.send(projectData)

})

//export { app };