import {getCoordinates} from './getCoords'
import {getCityPicture} from './getCityPic'
import {getWeather} from './getWeather'
import {postData} from './postData'


async function handleSubmit(event) {

  event.preventDefault()

  const dest = document.getElementById('dest').value
  const arival = document.getElementById('arival').value
  //const duration = document.getElementById('duration').value

  // await functions fetch from server and are chained to retrieve the data one by one
  const coords = await getCoordinates({"dest": dest})
  const weather = await getWeather({lng: coords.lng, lat: coords.lat, arival: arival})
  const pic = await getCityPicture({"dest": dest})
  const projectData = await postData({
    "city": coords.city,
    "state": coords.state,
    "arival": weather.date,
    "hiTemp": weather.hiTemp,
    "loTemp": weather.loTemp,
    "wind": weather.wind,
    "pic": pic.photo
  })

  const update = await updateUI(projectData)

}


const updateUI = async (projectData) => {
  console.log(projectData)
  const content = document.getElementById('content')
  content.innerHTML = ''
  content.style.height = '80vh'
  const img = document.createElement('img');
  img.src = projectData.pic; 
	const contentBox = document.getElementById('content')
  contentBox.appendChild(img);

  const description = document.createElement('P')
  description.innerHTML = `Here is your forecast for ${projectData.city} on ${projectData.arival}:`
  contentBox.appendChild(description)

  const flexBox = document.createElement('DIV')
  flexBox.id = 'weatherFlexBox'

  const hiTempBox = document.createElement('DIV')
  hiTempBox.className = 'weatherBox'
  const loTempBox = document.createElement('DIV')
  loTempBox.className = 'weatherBox'
  const windBox = document.createElement('DIV')
  windBox.className = 'weatherBox'
  contentBox.appendChild(flexBox)
  flexBox.appendChild(hiTempBox)
  flexBox.appendChild(loTempBox)
  flexBox.appendChild(windBox)


  return

}


export {handleSubmit, updateUI}
