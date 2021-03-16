import { handleSubmit } from './client/js/app'
import { getCityPicture } from './client/js/getCityPic'
import { getCoordinates } from './client/js/getCoords'
import { getWeather } from './client/js/getWeather'
import { postData } from './client/js/postData'
import { updateUI } from './client/js/updateUI'

import './client/style/style.scss'
import './client/style/mobile.scss'
import './client/pics/balloon-background.jpg'
import './client/pics/beach-background.jpg'


export {
    
    handleSubmit,
    getCityPicture,
    getCoordinates,
    getWeather,
    postData,
    updateUI
}