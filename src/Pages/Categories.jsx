import Sidenav from "../Components/Sidenav";
import Genrecard from "../Components/Genrecard";
import "../CSS/Categories.css";
import { useEffect, useState } from "react";
import songs from "../data.json";
export default function Categories() {
  let [genrearr, setGenrearr] = useState([]);
  let [genimg, setGenimg] = useState([]);
//   setGenimg([])
  useEffect(() => {
    setGenrearr(Object.keys(songs));
  }, []);
  return (
    <>
      <div className="main-screen">
        <Sidenav />
        <div className="genre">
          <div className="scroll-container">
          <div className="slider">
            {genrearr.map((item, index) => (
              <Genrecard
                genrename={item}
                genreimage={Returnimg(item)}
                key={index}
              />
            ))}
          </div>
          </div>
        </div>
        <div className="artists"></div>
      </div>
    </>
  );
}
function Returnimg(name){
     if(name=="Relaxing"){
          return "public/relax.jpg"
     }
     else if(name=="Party_Songs"){
          return "public/party.jpg"
     }
     else if(name=="Romantic_Songs"){
          return "public/romatic.jpg"
     }
     else if(name=="Sad_Songs"){
          return "public/sad.jpg"
     }
     else if(name=="Hip_Hop_Songs"){
          return "public/Hiphop.jpg"
     }
     else if(name=="Energetic_Songs"){
          return "public/energetic.jpg"
     }    

}
