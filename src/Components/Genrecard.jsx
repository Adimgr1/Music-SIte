import "../CSS/Genre.css"
import songs from "../data.json"
import { useState } from "react";
export default function Genrecard(prop) {
     
     let handleClick=(genrename)=>{
          let a= songs[genrename]
          prop.setSongList(a)
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