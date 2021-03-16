# What's the Weather?

## Overview
This is the final capstone project for  the Udacity front end nanodegree program. This traveling app allowing users to 
enter a destination and arrival date to be presented with a forecasted weather including expected high/low temperature as 
well as wind speed.

## Stack
`
    HTML
`

`
    CSS
`

`
    Javascript
`

`
    Node.js
`

`
    Jest
`

This project utilizes HTML, CSS, and Javascript for the front end. Node.js runs the backend express server. The project
uses Webpack to bring it all together. Jest was used for final testing.

## API's
The app uses 3 different API's to gather its data

[Geonames](http://www.geonames.org/export/web-services.html) is used to convert the input city to coordinates.

[Weatherbit](https://www.weatherbit.io/account/create) uses the coordinates to fetch weather data accordingly.

[Pixabay](https://pixabay.com/api/docs/) fetches a picture of the city to be displayed for the user.

The API Keys are all stored in a .env file

*** In order to have API authentication you will need a .env file with an API key for [Weatherbit](https://www.weatherbit.io/account/create)
and [Pixabay](https://pixabay.com/api/docs/). However, only a username is needed for [Geonames](http://www.geonames.org/export/web-services.html). ***

## Try it out!
To give it a try:

1. Download or clone the project.
`
    https://github.com/gagecates/Travel-App
`
2. Install dependencies
`
    npm i --save-dev
`
3. Start Express server
`
    npm start
`
4. Run Webpack build
`
    npm run build-prod
`
5. Navigate site
`
    head to [localhost:8000] (http://localhost:8000) to check out the site
`
6. To test using Jest:
`
    npm run test
`

