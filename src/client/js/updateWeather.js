const genericPhotoURL = 'https://locationindie.com/wp-content/uploads/2018/01/travel-2569522_1920.jpg'

function updateUIWeather (data) {

    /* make a call to the server for a fetch of the cities picture */
    const city = data.city_name
    const state = data.state_code
    getCityPicture('http://localhost:8000/city-pic', {city: city, state: state})

    .then(response => {
        
    })

    // clear contents of page to allow new data to populate
    let content = document.getElementById('content')
    content.innerHTML = ''

}


const getCityPicture = async ( url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json()
        return
        
      }catch(error) {
        console.log("error", error);
      }
}


export {updateUIWeather}