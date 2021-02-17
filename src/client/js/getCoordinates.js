function getCoordinates (cities) {
    cities.addEventListener('click', chosenCity);

    function chosenCity(evt) {
    console.log(evt.target.innerHTML)
    chosenCity = evt.target.innerHTML
    getCoordinates(chosenCity)
    
    }

}


export {getCoordinates}