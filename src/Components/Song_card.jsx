import { CurrentPlaying } from "../Context/CurrentPlaying";
import { song_chips_current } from "../Context/Song_chips_current";
import "../CSS/Genre.css"
import songs from "../data.json"
import { useContext } from "react";
export default function Songcard(prop) {
     let {setCurrentPlaying}= useContext(CurrentPlaying);
     let handleClick=(genrename)=>{
          let a= songs[genrename]
          setCurrentPlaying(prop.item)
     }
     return(
          <>
          <div onClick={()=>{
               handleClick(prop.genrename)
          }} className="genrecard">
               <img src={prop.genreimage} alt="" />
               <h1 style={{marginTop:"10px"}}>{prop.genrename}</h1>
          </div>
          </>
     )
}