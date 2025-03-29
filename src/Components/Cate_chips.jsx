import { Allsongs } from "../Context/Allsongs"
import "../CSS/Cate_chips.css"
import data from "../data.json"
import { useContext, useState } from "react"
export default function Cate_chips(prop) {
     let handleClick=()=>{
          let array=[]
          array= data[prop.item]
          prop.setDisplaySongs(array)
          console.log(prop.index)
          prop.setClicked({
               1:false,
               2:false,
               3:false,
               4:false,
               5:false,
               6:false,  
               7:false,
          })
          prop.setClicked((prev)=>({...prev,[prop.index+2]:true}))


     }
     return (
          <div onClick={handleClick} className={prop.clicked[prop.index+2]?"cat_chips_active cat_chips":"cat_chips"}>
               {genre_name(prop.item)}
               
          </div>
     )
}
function genre_name(genre){
     if(genre=="Relaxing"){
          return "Relax"
     }
     else if(genre=="Party_Songs"){
          return "Party"

     }else if(genre=="Romantic_Songs"){
          return "Romance"

     }
     else if (genre=="Sad_Songs"){
          return "Sad"

     }
     else if(genre=="Hip_Hop_Songs"){
          return "Hip-Hop"

     }
     else if(genre=="Energetic_Songs"){
          return "Energetic"
     }

}