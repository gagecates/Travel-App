function updateUICities (cities) {

    /* clear the contents of the content section
    and dynamicaly fill content with returned cities */
    let content = document.getElementById('content')
    content.innerHTML = ''
        
    const header = document.createElement('H3')
    header.innerHTML = 'Which of these locations:'
    content.appendChild(header)

    let cityList = document.createElement('UL')
    cityList.style.listStyleType = "none";
    cityList.id = 'list-cities'
    const geonames = cities.geonames

    for (var i in geonames) {

        let city = document.createElement('LI')
        city.innerHTML = geonames[i].name
        cityList.appendChild(city)
    }

    content.appendChild(cityList)

    return cityList

}


export {updateUICities}