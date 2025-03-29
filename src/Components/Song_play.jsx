import "../CSS/Song_play.css"
import Audio from "./Audio.jsx"
import Data from "../data.json"

import { useContext } from "react"
import { CurrentPlaying } from "../Context/CurrentPlaying"

export default function Song_play() {
     let{currentPlaying, setCurrentPlaying}= useContext(CurrentPlaying)
     
     return(
          <div className="song_play"> 
          <div className="dp-song">
               <img src={currentPlaying.Img} alt="" />
          </div>
          <div className="name">
               <h3>{currentPlaying.Song_Name}</h3>
               <h6>{currentPlaying.Artist}</h6>
          </div>
          <Audio />
          

          </div>
     )
}