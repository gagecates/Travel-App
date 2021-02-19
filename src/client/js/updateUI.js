const updateUI = async (projectData) => {
    console.log(projectData)
    const content = document.getElementById('content')
    content.innerHTML = ''
    content.style.height = '80vh'
    const img = document.createElement('img');
    img.src = projectData.pic; 
    img.id = 'destinationPic'
    const contentBox = document.getElementById('content')
    contentBox.appendChild(img);

    // create 'here is your forecast' text
    const description = document.createElement('P')
    description.innerHTML = `Here is your forecast for ${projectData.city} on ${projectData.arival}:`
    contentBox.appendChild(description)
  
    // flex box to contain the weather bubbles
    const flexBox = document.createElement('DIV')
    flexBox.id = 'weatherFlexBox'
  
    // hi temp bubble
    const hiTempBox = document.createElement('DIV')
    hiTempBox.className = 'weatherBox'
    const hiHeader = document.createElement('DIV')
    hiHeader.className = 'bubbleHeader'
    hiHeader.innerHTML = 'High'
    hiTempBox.appendChild(hiHeader)
    const hiValue = document.createElement('DIV')
    hiValue.className = 'bubbleValue'
    hiValue.innerHTML = projectData.hiTemp
    hiTempBox.appendChild(hiValue)

  
    // lo temp bubble
    const loTempBox = document.createElement('DIV')
    loTempBox.className = 'weatherBox'
    const loHeader = document.createElement('DIV')
    loHeader.className = 'bubbleHeader'
    loHeader.innerHTML = 'Low'
    loTempBox.appendChild(loHeader)
    const loValue = document.createElement('DIV')
    loValue.className = 'bubbleValue'
    loValue.innerHTML = projectData.loTemp
    loTempBox.appendChild(loValue)
  
    // wind bubble
    const windBox = document.createElement('DIV')
    windBox.className = 'weatherBox'
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

  export {updateUI}