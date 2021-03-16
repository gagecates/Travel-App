const updateUI = async (projectData, arivalDate) => {
    console.log(projectData)
    const content = document.getElementById('content')
    content.innerHTML = ''
    content.style.height = '70vh'
    const img = document.createElement('img');
    img.src = projectData.pic; 
    img.id = 'destinationPic'
    const contentBox = document.getElementById('content')
    contentBox.appendChild(img);

    // create 'here is your forecast' text
    const arivalDateDay = dateDayOfWeek(arivalDate)
    const description = document.createElement('P')
    description.innerHTML = `Here is your forecast for ${projectData.city} on ${arivalDateDay}:`
    contentBox.appendChild(description)
  
    // flex box to contain the weather bubbles
    const flexBox = document.createElement('DIV')
    flexBox.id = 'weatherFlexBox'
  
    // hi temp box
    const hiTempBox = document.createElement('DIV')
    hiTempBox.className = 'weatherBox'
    const hiIcon = document.createElement('img')
    hiIcon.className = "icon"
    hiIcon.src = url("src/client/pics/icon-hi.jpg")
    hiTempBox.appendChild(hiIcon)
    const hiHeader = document.createElement('DIV')
    hiHeader.className = 'bubbleHeader'
    hiHeader.innerHTML = 'High'
    hiTempBox.appendChild(hiHeader)
    const hiValue = document.createElement('DIV')
    hiValue.className = 'bubbleValue'
    hiValue.innerHTML = projectData.hiTemp
    hiTempBox.appendChild(hiValue)

    // lo temp box
    const loTempBox = document.createElement('DIV')
    loTempBox.className = 'weatherBox'
    const loIcon = document.createElement('img')
    loIcon.className = "icon"
    loIcon.src = url("src/client/pics/icon-lo.jpg")
    loTempBox.appendChild(loIcon)
    const loHeader = document.createElement('DIV')
    loHeader.className = 'bubbleHeader'
    loHeader.innerHTML = 'Low'
    loTempBox.appendChild(loHeader)
    const loValue = document.createElement('DIV')
    loValue.className = 'bubbleValue'
    loValue.innerHTML = projectData.loTemp
    loTempBox.appendChild(loValue)
  
    // wind box
    const windBox = document.createElement('DIV')
    windBox.className = 'weatherBox'
    const windIcon = document.createElement('img')
    windIcon.className = "icon"
    windIcon.src = url("src/client/pics/icon-wind.png")
    windBox.appendChild(windIcon)
    const windHeader = document.createElement('DIV')
    windHeader.className = 'bubbleHeader'
    windHeader.innerHTML = 'Wind'
    windBox.appendChild(windHeader)
    const windValue = document.createElement('DIV')
    windValue.className = 'bubbleValue'
    windValue.innerHTML = `${projectData.wind}mph`
    windBox.appendChild(windValue)

    contentBox.appendChild(flexBox)
    flexBox.appendChild(hiTempBox)
    flexBox.appendChild(loTempBox)
    flexBox.appendChild(windBox)
  
    return
  
  }

  // returns actual day of week name from 'yyyy-mm-dd' format
  function dateDayOfWeek(date) {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const newDate = new Date(date)
    const dayNumber = newDate.getDay()

    console.log(date)
    console.log(dayNumber)
    return days[dayNumber]

  }


  export {updateUI, dateDayOfWeek}