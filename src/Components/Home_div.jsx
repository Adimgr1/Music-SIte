import { useContext, useEffect, useState } from "react";
import "../CSS/Home_div.css";
import data from "../data.json";
import { CiPlay1 } from "react-icons/ci";
import { CurrentPlaying } from "../Context/CurrentPlaying";
import { song_chips_current } from "../Context/Song_chips_current";
import { CiPause1 } from "react-icons/ci";
export default function Home_div() {
  let [click, setClick] = useState(0);
  let [featuredsongs, setfeaturedsongs] = useState();
  let { setCurrentPlaying } = useContext(CurrentPlaying);
  let {
    playingFeatured,
    setPlayingFeatured,
    setPlayingGeneral,
    setCurrentchips,
  } = useContext(song_chips_current);

  useEffect(() => {
    let arrayofsongs = [
      ...data.Relaxing,
      ...data.Party_Songs,
      ...data.Romantic_Songs,
      ...data.Sad_Songs,
      ...data.Hip_Hop_Songs,
      ...data.Energetic_Songs,
    ];
    let selected = featured(arrayofsongs);
    setfeaturedsongs(selected);
  }, []);
  let handlePlay = (index) => {
    setCurrentPlaying({
      ...featuredsongs[index],
      fromFeatured: true,
      index: index,
    });
    setCurrentchips(featuredsongs[index].Song_Name);
    setPlayingFeatured({
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
    });
    setTimeout(()=>{
      setPlayingFeatured((prev) => ({ ...prev, [index]: true }));
    },5)
    setPlayingGeneral(false);
    
  };
  let handlePause = (index) => {
    setPlayingFeatured(
      {
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
      }
    );
    setPlayingGeneral(false)
    setCurrentchips("")


  };

  return (
    <>
      <div className="Home_div">
        <div className="chips1 chips featured-hover">
          <div
            className="play-div1"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              position: "absolute",
              fontSize: "40px",
              right: "40px",
              bottom: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playingFeatured[0] ? (
              <CiPause1 onClick={() => handlePause(0)} />
            ) : (
              <CiPlay1 onClick={() => handlePlay(0)} />
            )}
          </div>
          {featuredsongs ? (
            <div
              className="song-detail2"
              style={{
                position: "absolute",
                color: "white",
                alignText: "center",
              }}
            >
              <h3>{featuredsongs[0].Song_Name}</h3>
              <p>{featuredsongs[0].Artist}</p>
            </div>
          ) : null}

          {featuredsongs ? (
            <img
              style={{ width: "100%", height: "100%" }}
              src={featuredsongs[0].Img}
              alt=""
            />
          ) : null}
        </div>
        <div className="chips chips2 featured-hover">
          <div
            className="play-div2"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              position: "absolute",
              fontSize: "40px",
              right: "40px",
              bottom: "70px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playingFeatured[1] ? (
              <CiPause1 onClick={() => handlePause(1)} />
            ) : (
              <CiPlay1 onClick={() => handlePlay(1)} />
            )}
          </div>

          {featuredsongs ? (
            <div
              className="song-detail3"
              style={{
                position: "absolute",
                color: "white",
                alignText: "center",
              }}
            >
              <h3>{featuredsongs[1].Song_Name}</h3>
              <p>{featuredsongs[1].Artist}</p>
            </div>
          ) : null}

          {featuredsongs ? (
            <img
              style={{ width: "100%", height: "100%" }}
              src={featuredsongs[1].Img}
              alt=""
            />
          ) : null}
        </div>

        <div className="chips chips3">
          <div
            className="play-div"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              position: "absolute",
              fontSize: "40px",
              right: "40px",
              bottom: "70px",
              zIndex: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playingFeatured[2] ? (
              <CiPause1 onClick={() => handlePause(2)} />
            ) : (
              <CiPlay1 onClick={() => handlePlay(2)} />
            )}
          </div>
          {featuredsongs ? (
            <div
              className="song-detail"
              style={{
                position: "absolute",
                color: "white",
                alignText: "center",
              }}
            >
              <h3>{featuredsongs[2].Song_Name}</h3>
              <p>{featuredsongs[2].Artist}</p>
            </div>
          ) : null}
          {featuredsongs ? (
            <img
              style={{ width: "100%", height: "100%" }}
              src={featuredsongs[2].Img}
              alt=""
            />
          ) : null}
        </div>
        <div className="chips chips4 featured-hover2">
          <div
            className="play-div3"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              position: "absolute",
              fontSize: "40px",
              right: "40px",
              bottom: "70px",
              zIndex: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playingFeatured[3] ? (
              <CiPause1 onClick={() => handlePause(3)} />
            ) : (
              <CiPlay1 onClick={() => handlePlay(3)} />
            )}
          </div>

          {featuredsongs ? (
            <div
              className="song-detail4"
              style={{
                position: "absolute",
                color: "white",
                alignText: "center",
              }}
            >
              <h3>{featuredsongs[3].Song_Name}</h3>
              <p>{featuredsongs[3].Artist}</p>
            </div>
          ) : null}
          {featuredsongs ? (
            <img
              style={{ width: "100%", height: "100%" }}
              src={featuredsongs[3].Img}
              alt=""
            />
          ) : null}
        </div>
        <div className="chips chips5 featured-hover3">
          <div
            className="play-div4"
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "green",
              color: "white",
              position: "absolute",
              fontSize: "40px",
              right: "40px",
              bottom: "70px",
              zIndex: "3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {playingFeatured[4] ? (
              <CiPause1 onClick={() => handlePause(4)} />
            ) : (
              <CiPlay1 onClick={() => handlePlay(4)} />
            )}
          </div>
          {featuredsongs ? (
            <div
              className="song-detail5"
              style={{
                position: "absolute",
                color: "white",
                alignText: "center",
              }}
            >
              <h3>{featuredsongs[4].Song_Name}</h3>
              <p>{featuredsongs[4].Artist}</p>
            </div>
          ) : null}
          {featuredsongs ? (
            <img
              style={{ width: "100%", height: "100%" }}
              src={featuredsongs[4].Img}
              alt=""
            />
          ) : null}
        </div>
      </div>
    </>
  );
}
function featured(arrayofsongs) {
  let selectedArray = [];
  for (let i = 0; i < 5; i++) {
    let randomIndex = Math.floor(Math.random() * arrayofsongs.length);
    selectedArray.push(arrayofsongs[randomIndex]);
  }
  return selectedArray;
}
