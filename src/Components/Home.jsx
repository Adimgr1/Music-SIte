import "../CSS/Home.css";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import Sidenav from "./Sidenav";
import Home_div from "./Home_div";
import Song_play from "./Song_play";
import Lower_home_div from "./Lower_home_div";
import { use, useContext, useEffect } from "react";
import { CurrentPlaying } from "../Context/CurrentPlaying";
import { Allsongs_provider } from "../Context/Allsongs";
import { Song_chips_current_provider } from "../Context/Song_chips_current";
import data from "../data.json";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { selecteduser } from "../Context/Selecteduser";
import dp from "../Profile.json";
import { Logged_context } from "../Context/Logged";

export default function Home() {
  let { logged } = useContext(Logged_context);
  let { currentPlaying } = useContext(CurrentPlaying);
  let search;

  let handleChange = (e) => {
    let a = e.target.value;
    let array = [
      ...data.Relaxing,
      ...data.Party_Songs,
      ...data.Romantic_Songs,
      ...data.Sad_Songs,
      ...data.Hip_Hop_Songs,
      ...data.Energetic_Songs,
    ];
    if (search) {
      clearTimeout(search);
    }
    search = setTimeout(() => {
      console.log(array.filter((item) => item.Song_Name.includes(a)));
    }, 1000);
  };

  return (
    <>
      <Allsongs_provider>
        <Song_chips_current_provider>
          <div className="screen">
            <div className="nav">
              <input
                onChange={handleChange}
                placeholder="Search for and song"
                className="search"
              ></input>
              <IoSearch className="icon-search"></IoSearch>
              <div className="profile">
                <div className="dp">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                    }}
                    src={
                      logged
                        ? dp[
                            JSON.parse(localStorage.getItem("user"))[
                              JSON.parse(localStorage.getItem("selected"))[0]
                            ].users[
                              JSON.parse(localStorage.getItem("selected"))[1]
                            ].ind
                          ]["dp"]
                        : "https://kirstymelmedlifecoach.com/wp-content/uploads/2020/10/279-2799324_transparent-guest-png-become-a-member-svg-icon.png"
                    }
                    alt=""
                  />
                </div>
                <h3>
                  {logged
                    ? JSON.parse(localStorage.getItem("user"))[
                        JSON.parse(localStorage.getItem("selected"))[0]
                      ].name
                    : "Guest"}
                </h3>
                <div className="same">
                  <FaRegHeart></FaRegHeart>
                </div>
                <div className="same">
                  <BiMessageRoundedDetail></BiMessageRoundedDetail>
                </div>
              </div>
            </div>
            <Sidenav />
            <Home_div />
            <Lower_home_div />
            {currentPlaying ? <Song_play /> : null}
          </div>
        </Song_chips_current_provider>
      </Allsongs_provider>
    </>
  );
}
