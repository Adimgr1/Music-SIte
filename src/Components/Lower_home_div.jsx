import "../CSS/Lower_home.css";
import "../CSS/Cate_chips.css";
import Song_chips from "./Song_chips";
import Music_data from "../data.json";
import Cate_chips from "../Components/Cate_chips";
import data from "../data.json";
import { useEffect, useContext, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Allsongs } from "../Context/Allsongs";
import { IoIosArrowForward } from "react-icons/io";
export default function Lower_home_div() {
  let { setSongList } = useContext(Allsongs);
  let [showLeftandRight, setShowLeftandRight] = useState({
    showLeft: true,
    showRight: false,
  });
  let [displaySongs, setDisplaySongs] = useState([]);
  let categories = Object.keys(Music_data);
  let Scroll_Container_Ref = useRef();
  let allRef = useRef();
  let [clicked, setClicked] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  });

  let handleArrowBack = () => {
    if (Scroll_Container_Ref.current) {
      Scroll_Container_Ref.current.scrollBy({ behavior: "smooth", left: 170 });
    }
  };
  let handleArrowFoeward=()=>{
    if(Scroll_Container_Ref.current){
      Scroll_Container_Ref.current.scrollBy({behavior:"smooth",left:-170})
    }
  }
  let handleClick = () => {
    console.log(data);
    let array = [];
    array = [
      ...data.Relaxing,
      ...data.Party_Songs,
      ...data.Romantic_Songs,
      ...data.Sad_Songs,
      ...data.Hip_Hop_Songs,
      ...data.Energetic_Songs,
    ];
    setSongList(array);
    setDisplaySongs(array);
    setClicked({
      1: true,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
      7: false,
    });
  };
  useEffect(() => {
    allRef.current.click();
  }, []);
  return (
    <>
      <div className="Lower_home_div">
        <div className="categories">
          <h3>Select Categories</h3>
          <div
          className="cat-div-container"
          >
            <div
              ref={allRef}
              onClick={handleClick}
              className={
                clicked[1] ? "cat_chips_active cat_chips" : "cat_chips"
              }
            >
              All
            </div>
            {categories.map((items, index) => (
              <Cate_chips
                key={index}
                item={items}
                displaySongs={displaySongs}
                setDisplaySongs={setDisplaySongs}
                clicked={clicked}
                setClicked={setClicked}
                index={index}
              />
            ))}
          </div>
        </div>
        <div ref={Scroll_Container_Ref} className="allSongs">
          {showLeftandRight.showLeft ? (
            <IoIosArrowBack onClick={handleArrowBack} className="back_arrow" />
          ) : null}
          
          {displaySongs.map((items, index) => (
            <Song_chips key={index} song={items} index={index} />
          ))}
          <IoIosArrowForward className="forward_arrow" onClick={handleArrowFoeward} />
        </div>
      </div>
    </>
  );
}
