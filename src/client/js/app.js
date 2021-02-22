import {getCoordinates} from './getCoords'
import {getCityPicture} from './getCityPic'
import {getWeather} from './getWeather'
import {postData} from './postData'
import {updateUI} from './updateUI'


// dynamically adjust callender 
window.onload = function() {

  // get todays date and format to 'yyyy-mm-dd'
  const todayDate = new Date()
  const newDate = new Date(todayDate).toISOString().split('T')[0]

  // API only fetches up to 16 days date becomes limit to be picked
  const dateLimit = new Date()
  dateLimit.setDate(new Date().getDate() + 15)
  const newDateLimit = new Date(dateLimit).toISOString().split('T')[0]

  // dynamically change the date shown on callender to tomorrows date
  var datePicker = document.querySelector('input[type="date"]');
  datePicker.value = newDate;
  datePicker.min = newDate;
  datePicker.max = newDateLimit;

};


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

  const update = await updateUI(projectData, arival)

}


export {handleSubmit}
