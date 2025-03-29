import { IoPlaySkipBackOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";
import { IoPlaySkipForwardOutline } from "react-icons/io5";
import { CiPause1 } from "react-icons/ci";
import { use, useState } from "react";
import { useEffect } from "react";
import { TfiControlShuffle } from "react-icons/tfi";
import { CiVolumeHigh } from "react-icons/ci";
import { IoRepeat } from "react-icons/io5";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import "../CSS/Song_play.css";
import { IoVolumeMuteOutline } from "react-icons/io5";
import "../CSS/Audio.css";
import { useContext, useRef } from "react";
import { CurrentPlaying } from "../Context/CurrentPlaying";
import { Allsongs } from "../Context/Allsongs";
import { song_chips_current } from "../Context/Song_chips_current";
export default function Audio() {
  let {
    setCurrentchips,
    playingFeatured,
    playingGeneral,
    setPlayingFeatured,
    setPlayingGeneral,
  } = useContext(song_chips_current);
  let { currentPlaying, setCurrentPlaying } = useContext(CurrentPlaying);
  let { songList } = useContext(Allsongs);
  let [duration, setduration] = useState(0);
  let [current, setCurrent] = useState(0);
  let [isRepeat, setIsRepeat] = useState(false);
  let [isShuffle, setIsShuffle] = useState(false);
  let [isSound, setIsSound] = useState(false);
  let rangeRef = useRef();
  let audioRef = useRef();
  let handlePlay = () => {
    if (currentPlaying.fromFeatured) {
      setPlayingFeatured((prev) => {
        return { ...prev, [currentPlaying.index]: !prev[currentPlaying.index] };
      });
      setPlayingGeneral(false);
    } else {
      setPlayingGeneral(!playingGeneral);
    }
  };
  let handlecurrent = () => {
    setCurrent(Math.floor(audioRef.current.currentTime));
  };
  let handlemetadata = () => {
    console.log(audioRef.current.duration);
    setduration(Math.floor(audioRef.current.duration));
    
  };

  let handleChange = (e) => {
    setCurrent(e.target.value);
    audioRef.current.currentTime = e.target.value;
  };

  let handleInc = () => {
    setCurrent(current + 10);
    audioRef.current.currentTime = current + 10;
  };

  let handleDec = () => {
    setCurrent(current - 10);
    audioRef.current.currentTime = current - 10;
  };

  let handleRepeat = () => {
    setIsRepeat(!isRepeat);
    setIsShuffle(false);
  };

  let handleShuffle = () => {
    setIsShuffle(!isShuffle);
    setIsRepeat(false);
  };

  let handleSound = () => {
    setIsSound(!isSound);
  };

  let handleRangeBackground = () => {
    let percent = (current / duration) * 100;
    rangeRef.current.style.background = `linear-gradient(to right, white ${percent}%, #757780 ${percent}%)`;
  };
  useEffect(() => {
    if (!currentPlaying.fromFeatured) {
      if (playingGeneral) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingGeneral]);
  useEffect(() => {
    if (isSound) {
      audioRef.current.volume = 0;
    } else {
      audioRef.current.volume = 1;
    }
  }, [isSound]);

  useEffect(() => {
    rangeRef.current.max = duration;
  }, [duration]);

  useEffect(() => {
    if (current == duration) {
      if (isShuffle) {
        chooseSong(
          songList,
          setCurrentPlaying,
          setCurrent,
          audioRef,
          setPlayingFeatured,
          CurrentPlaying,
          setPlayingGeneral,
          setCurrentchips
        );
        setTimeout(() => {
          audioRef.current.play();
        }, 1000);
      } else if (isRepeat) {
        setCurrentPlaying((prev) => {
          return prev;
        });
        setCurrent(0);
        audioRef.current.currentTime = 0;
        if (currentPlaying.fromFeatured) {
          setPlayingFeatured((prev) => ({
            ...prev,
            [currentPlaying.index]: true,
          }));
        } else {
          setPlayingGeneral(true);
        }
      } else {
        setCurrent(0);
        audioRef.current.currentTime = 0;
        setPlayingGeneral(false);
        setPlayingFeatured({
          0: false,
          1: false,
          2: false,
          3: false,
          4: false,
        });
      }
    }
    handleRangeBackground();
  }, [current]);

  useEffect(() => {
    if (currentPlaying.Music_Link) {
      if (playingFeatured[currentPlaying.index]) {
        setTimeout(()=>{
          audioRef.current.play();
        },10)
        //audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [playingFeatured, currentPlaying.Music_Link]);

  return (
    <>
      <div className="Audio">
        <audio
          onTimeUpdate={handlecurrent}
          onLoadedMetadata={handlemetadata}
          ref={audioRef}
          src={currentPlaying?.Music_Link}
        ></audio>
        <div
          onClick={handleDec}
          className={
            playingGeneral || playingFeatured[currentPlaying.index]
              ? "play-before"
              : "play-before disable"
          }
        >
          <IoPlaySkipBackOutline />
        </div>
        <div onClick={handlePlay} className="play">
          {playingFeatured[currentPlaying.index] || playingGeneral ? (
            <CiPause1 />
          ) : (
            <CiPlay1 />
          )}
        </div>
        <div
          onClick={handleInc}
          className={
            playingGeneral || playingFeatured[currentPlaying.index]
              ? "play-next"
              : "play-next disable"
          }
        >
          <IoPlaySkipForwardOutline />
        </div>

        <input
          onChange={handleChange}
          ref={rangeRef}
          type="range"
          min="0"
          max={duration}
          className="range"
          value={current}
        />
        <h3 className="total-duration">
          {duration ? totalDuration(duration) : "00:00"}
        </h3>
        <h3 className="current-duration">
          {current ? time(current) : "00:00"}
        </h3>
      </div>
      <div className="side-menu">
        <MdOutlinePlaylistAdd className="side-menu-item" />
        <TfiControlShuffle
          onClick={handleShuffle}
          className={isShuffle ? "side-menu-item clicked" : "side-menu-item"}
        />
        <IoRepeat
          onClick={handleRepeat}
          className={isRepeat ? "side-menu-item clicked" : "side-menu-item"}
        />
        {isSound ? (
          <IoVolumeMuteOutline
            onClick={handleSound}
            className={isSound ? "side-menu-item clicked" : "side-menu-item"}
          />
        ) : (
          <CiVolumeHigh
            onClick={handleSound}
            className={isSound ? "side-menu-item clicked" : "side-menu-item"}
          />
        )}
      </div>
    </>
  );
}
function totalDuration(duration) {
  let minutes = Math.floor(duration / 60);
  let seconds = Math.floor(duration % 60);
  return minutes + ":" + seconds;
}
function time(current) {
  let minutes = Math.floor(current / 60);
  let seconds = Math.floor(current % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
}
function chooseSong(
  song,
  setCurrentPlaying,
  setCurrent,
  audioRef,
  setPlayingFeatured,
  currentPlaying,
  setPlayingGeneral,
  setCurrentchips
) {
  let a = song.length;
  let index = Math.floor(Math.random() * a);
  setCurrentPlaying(song[index]);
  setCurrent(0);

  setPlayingFeatured((prev) => ({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  }));
  setPlayingGeneral(true);
  setCurrentchips(song[index].Song_Name);

  audioRef.current.currentTime = 0;
}
