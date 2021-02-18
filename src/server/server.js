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

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log("server running"); 
    console.log(`running on localhost: ${port}`);
}

// API info
const geoUser = process.env.geoUser;
const weatherBitKey = process.env.weatherBitKey
const pixabayKey = process.env.pixabayKey


let tripDate = ''
let cityOptions = {}

let finalData = {
  destination: '',
  duration: '',
  temp: [],
  pic: ''
}

// return home page to client
app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})




































app.post('/getCities', async function (req, res) {
  const dest = req.body.dest
  totalData.date = req.body.date
  const geoURL = `http://api.geonames.org/searchJSON?q=${dest}&maxRows=10&username=+${geoUser}`;
  const response = await fetch(geoURL)
  
    try {
      const responseJSON = await response.json()
      newCityOptions = Object.assign(cityOptions, responseJSON.geonames)
      res.send(responseJSON)

    }  catch(error) {
      console.log('error')
      console.log("error", error);
  
    }
})


app.post('/getWeather', async function (req, res) {

  const city = req.body.city
  const cityObject = Object.values(cityOptions).find(obj=>obj.name === city)
  const lat = cityObject.lat
  const lng = cityObject.lng
  
  const weatherURL = `http://api.weatherbit.io/v2.0/forecast/daily?NC&key=${weatherBitKey}&lat=${lat}&lon=${lng}`;
  const response = await fetch(weatherURL)
    
    try {
      const responseJSON = await response.json()
      totalData.destination = city
      console.log(responseJSON)
      res.send(responseJSON)

    }  catch(error) {
      console.log('error')
      console.log("error", error);
  
    }
})


app.post('/city-pic', async function (req, res) {
  const city = req.body.city
  const state = req.body.state
  const pixURL = `https://pixabay.com/api/?key=${pixabayKey}&q=${city}&image_type=photo&category=travel`;
  const response = await fetch(pixURL)
  
    try {
      const newData = await response.json()
      const photoURL = newData.hits[0].webformatURL

        if (photoURL == null) {

          res.send(genericPhotoURL)
  
        }else {

          res.send(photoURL)
        }
    
    }  catch(error) {
      console.log("error", error);
  
    }
})

