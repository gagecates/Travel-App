import { handleSubmit } from './src/client/js/app'
import { getCityPicture } from './src/client/js/getCityPic'
import { getCoordinates } from './src/client/js/getCoords'
import { getWeather } from './src/client/js/getWeather'
import { postData } from './src/client/js/postData'
import { updateUI } from './src/client/js/updateUI'

import './src/client/style/style.scss'
import './src/client/style/mobile.scss'
import './src/client/pics/balloon-background.jpg'
import './src/client/pics/beach-background.jpg'


export {
    
    handleSubmit,
    getCityPicture,
    getCoordinates,
    getWeather,
    postData,
    updateUI
}