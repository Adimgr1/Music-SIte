import { useState, useEffect, useContext } from "react";
import "../CSS/Users.css";
import { IoAddSharp } from "react-icons/io5";
import dp from "../Profile.json";
import Usergrid from "../Components/Usergrid";
import { selecteduser } from "../Context/Selecteduser";
import { useNavigate } from "react-router-dom";

export default function Users() {
  let navigate= useNavigate();
  let [users1, setUsers] = useState([]);
  let [edit, setEdit] = useState(false);
  let [selected1, setSelected1] = useState(3);
  let [name, setName] = useState("");
  useEffect(() => {
    let temp = localStorage.getItem("user");
    temp = JSON.parse(temp);
    console.log(temp)
    setUsers(temp[JSON.parse(localStorage.getItem("selected"))[0]]["users"]);
  }, [edit]);
  useEffect(()=>{
    let temp = localStorage.getItem("user");
    temp = JSON.parse(temp);
    console.log(temp)
    setUsers(temp[JSON.parse(localStorage.getItem("selected"))[0]]["users"]);
  },[])

  let handleAdd = () => {
    let temp = localStorage.getItem("user");
    temp = JSON.parse(temp);
    setEdit(true);
  };
  let listenChange = (e) => {
    setName(e.target.value);
  };
  let addProfile = (e) => {
    let temp = localStorage.getItem("user");
    temp = JSON.parse(temp);
    temp[selected].users.push({ name: name, ind: selected1 });
    localStorage.setItem("user", JSON.stringify(temp));
    setEdit(false);
  };
  let handleClick =(index)=>{
    let temp= localStorage.getItem("selected");
    temp = JSON.parse(temp);
    temp.push(index);
    localStorage.setItem("selected",JSON.stringify(temp));
    setTimeout(()=>{
      navigate("/");

    },2000)
      
      

  }
  return (
    <>
      <div className="main-screen2">
        <h1>{edit ? "Create User" : "Who's listening"}</h1>
        <div className="user">
          {edit ? (
            <Usergrid selected={selected1} setSelected={setSelected1} />
          ) : (
            <>
              {users1?.map((user, index) => (
                <>
                  <div
                  onClick={()=>{
                    handleClick(index)

                  }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div className="user-card" key={index}>
                      <img style={{width:"100%"}} src={dp[user.ind].dp} alt="" />
                    </div>
                    <h2 style={{ color: "white", marginTop:"10px" }}>{user.name}</h2>
                  </div>
                </>
              ))}
              <div className="user-card-add" onClick={handleAdd}>
                <IoAddSharp />
              </div>
            </>
          )}
        </div>
        {edit ? (
          <form className="form">
            <input
              value={name}
              onChange={listenChange}
              name="name"
              type="text"
              placeholder="Enter Name"
            />
            <button onClick={addProfile}>Add</button>
          </form>
        ) : null}
      </div>
    </>
  );
}
