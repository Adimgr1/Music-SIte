import "../CSS/Sidenav.css";
import { IoHomeOutline } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { BiSolidPlaylist } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import Title from "../assets/Title.png";
import { SelectedPage } from "../Context/SelectedPage";
import { useContext, useState } from "react";
import { Logged_context } from "../Context/Logged";
import Profile from "./Profile";


export default function Sidenav() {
  let {logged}= useContext(Logged_context)
  let [showProfile, setShowProfile]= useState(false)
  let { setSelectedPage, selectedPage } = useContext(SelectedPage);
  let navigate = useNavigate();
  let handleCategories = () => {
    navigate("/categories");
    setSelectedPage("Categories");
  };
  let handleHome = () => {
    setSelectedPage("Home");
    navigate("/");
    setShowProfile(false)
  };
  let handleProfile=()=>{
    if(!logged){
      navigate("/sign-in");
    }else{
      setSelectedPage("Profile")
      setShowProfile(!showProfile)
    }
  }

  let handlePlaylist=()=>{
    
  }
  return (
    <div className="sidenav">
      <img className="title-img" src={Title} alt="" />
      <div className="side-nav-menu">
        <div
          className={
            selectedPage == "Home"
              ? "menu-content menu-content-selected"
              : "menu-content"
          }
        >
          <IoHomeOutline></IoHomeOutline>
          <p onClick={handleHome}>Home</p>
        </div>
        <div className={
            selectedPage == "Profile"
              ? "menu-content menu-content-selected"
              : "menu-content"
          }>
          <IoPeopleOutline></IoPeopleOutline>
          <p onClick={handleProfile}>Profile</p>
        </div>
        

        <div className={showProfile?"menu-content check-margin":"menu-content"}>
          <BiSolidPlaylist></BiSolidPlaylist>
          <p>Playlist</p>
        </div>
      </div>
      {showProfile ? <Profile selectedPage={selectedPage}/> : null}
    </div>
  );
}
