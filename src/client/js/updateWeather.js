function updateUIWeather (weatherData, cityName) {

    /* make a call to the server for a fetch of the cities picture */
    const city = cityName.city
    console.log(city)
    getCityPicture('http://localhost:8000/city-pic', city)

    .then(newData => {
        console.log(newData)
    })

    // clear contents of page to allow new data to populate
    let content = document.getElementById('content')
    content.innerHTML = ''

}


const getCityPicture = async ( url = '', city)=>{

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
        return newData

      }catch(error) {
        console.log("error", error);
      }
};


export {updateUIWeather}