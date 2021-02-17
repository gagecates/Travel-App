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

// return home page to client
app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/analyze', async function (req, res) {
  const dest = req.body.dest
  const geoURL = `http://api.geonames.org/searchJSON?q=${dest}&maxRows=10&username=+${geoUser}`;
  const response = await fetch(geoURL)
    
    try {
      const responseJSON = await response.json()
      console.log(responseJSON)
      res.send(responseJSON)

    }  catch(error) {
      console.log('error')
      console.log("error", error);
  
    }
})