import "../CSS/Sidenav.css";
import { IoHomeOutline } from "react-icons/io5";
import { PiCirclesFour } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { BiSolidPlaylist } from "react-icons/bi";
import { Navigate, useNavigate } from "react-router-dom";
import Title from "../assets/Title.png";
import { SelectedPage } from "../Context/SelectedPage";
import { useContext } from "react";

export default function Sidenav() {
  let { setSelectedPage, selectedPage } = useContext(SelectedPage);
  let navigate = useNavigate();
  let handleCategories = () => {
    navigate("/categories");
    setSelectedPage("Categories");
  };
  let handleHome = () => {
    setSelectedPage("Home");
    navigate("/");
  };
  let handleProfile=()=>{
    navigate("/sign-in");

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
            selectedPage == "Categories"
              ? "menu-content menu-content-selected"
              : "menu-content"
          }>
          <PiCirclesFour></PiCirclesFour>
          <p onClick={handleCategories}>Categories</p>
        </div>
        <div className="menu-content">
          <IoPeopleOutline></IoPeopleOutline>
          <p onClick={handleProfile}>Profile</p>
        </div>
        <div className="menu-content">
          <BiSolidPlaylist></BiSolidPlaylist>
          <p>Playlist</p>
        </div>
      </div>
    </div>
  );
}
