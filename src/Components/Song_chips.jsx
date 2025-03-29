import { useContext, useState } from "react";
import "../CSS/Song_chips.css";
import { CurrentPlaying } from "../Context/CurrentPlaying";
import { song_chips_current } from "../Context/Song_chips_current";
export default function Song_chips(prop) {
  let { setCurrentPlaying, currentPlaying } = useContext(CurrentPlaying);
  let { setPlayingFeatured} = useContext(song_chips_current);
  let { currentchips, setCurrentchips, setPlayingGeneral } =
    useContext(song_chips_current);
  let handleClick = () => {
    setCurrentchips(prop.song.Song_Name);
    setCurrentPlaying(prop.song);
    setPlayingFeatured({0:false,1:false,2:false,3:false,4:false});
    setPlayingGeneral(false)
  };
  return (
    <div
      onClick={handleClick}
      className={
        currentchips == prop.song.Song_Name
          ? "playing_class song_chips"
          : "song_chips"
      }
    >
      <img
        className={
          currentchips == prop.song.Song_Name ? "playing" : "not_playing"
        }
        src="assets/playing.gif"
      />
      <img
      className="poster"
        src={prop.song.Img}
        alt=""
      />
      <p>{prop.song.Song_Name}</p>
    </div>
  );
}
