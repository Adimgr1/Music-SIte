import { useContext, useEffect, useState } from "react";
import "../CSS/Sign-up.css";
import { Link, useNavigate } from "react-router-dom";
import { selecteduser } from "../Context/Selecteduser";
import { Logged_context } from "../Context/Logged";
export default function SignUp() {
  let [loadingAnimation, setLoadingAnimation] = useState(false);
  let navigate = useNavigate();
  let { setSelected } = useContext(selecteduser);
  let { setLogged } = useContext(Logged_context);
  let [error, setError] = useState(false);
  useEffect(() => {
    let a = setTimeout(() => {
      setLoadingAnimation(true);
    }, 0);
    return () => {
      clearTimeout(a);
    };
  }, []);
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      user.name.length < 12 &&
      user.name.length > 3 &&
      user.email.includes("@") &&
      user.email.includes(".com") &&
      user.password.length > 6
    ) {
      e.preventDefault();
      let temp = localStorage.getItem("user");
      temp = JSON.parse(temp);
      user.users = [{ name: user.name, ind: 3 }];
      temp.push(user);
      localStorage.setItem("user", JSON.stringify(temp));
      // setUser({});
      localStorage.setItem("selected",JSON.stringify([temp.length-1]));
      navigate("/users");
      setLogged(true);
    }else{
      console.log(true)
      setError(true);
    }
  };
  let handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <>
      <div className="main-screen">
        <div className="left">
          <div className="signin">
            <h1 className={loadingAnimation ? "form-input fade-in" : "loading"}>
              Welcome
            </h1>
            <form onSubmit={handleSubmit}>
              <input
                className={loadingAnimation ? "form-input fade-in" : "loading"}
                value={user.name ? user.name : ""}
                name="name"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
              <input
                className={loadingAnimation ? "form-input fade-in" : "loading"}
                value={user.email ? user.email : ""}
                name="email"
                type="text"
                placeholder="Enter e-Mail"
                onChange={handleChange}
              />
              <input
                className={loadingAnimation ? "form-input fade-in" : "loading"}
                value={user.password ? user.password : ""}
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
              />

              <button
              
                className={loadingAnimation ? "form-input fade-in" : "loading"}
                type="submit"
              >
                Sign Up
              </button>
            </form>
          </div>
          <div className={error?"instruction error":"instruction"}>
            <h1>Instructions</h1>
            <p>
              1. Name should be of maximum 12 characters and minimum 3
              characters <br />
              2. Enter your e-mail in format of - &nbsp; abc@xyz.com <br />
              3. Password should be of minimum 6 characters <br />
            </p>
          </div>
          <p className="sign-in-link">
            Already have an account &nbsp;<Link to="/sign-in">Sign In</Link>
          </p>
          <img className={error?"pointing":"not-error"} src="public/pointing.gif" alt="" />
        </div>
        
        <div className="right">
          <img
            src="https://images.pexels.com/photos/10331647/pexels-photo-10331647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
