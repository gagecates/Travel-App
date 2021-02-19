import {getCoordinates} from './getCoords'
import {getCityPicture} from './getCityPic'
import {getWeather} from './getWeather'
import {postData} from './postData'
import {updateUI} from './updateUI'


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



export {handleSubmit}
