import "../CSS/Sign-in.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Logged_context } from "../Context/Logged";
import { selecteduser } from "../Context/Selecteduser";
export default function SingIn() {
  let { logged, setLogged } = useContext(Logged_context);
  let { selected, setSelected } = useContext(selecteduser);
  let navigate = useNavigate();

  let [entry, setEntry] = useState({
    email: "",
    password: "",
  });
  let [error, setError] = useState({
    email: false,
    password: false,
  });
  let [matched, setMatched] = useState(true);
  let handleChange = (e) => {
    setEntry((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    if (
      entry.email === "" ||
      !entry.email.includes("@") ||
      !entry.email.includes(".com")
    ) {
      setError({
        email: true,
        password: false,
      });
    } else if (entry.password === "" || entry.password.length < 6) {
      setError({
        email: false,
        password: true,
      });
    } else {
      console.log("error");
      setError({
        email: false,
        password: false,
      });
      let temp = localStorage.getItem("user");
      temp = JSON.parse(temp);
      temp.forEach((element, index) => {
        if (
          element.email === entry.email &&
          element.password === entry.password
        ) {
          setLogged(true);
          setMatched(true);
          localStorage.setItem("selected", JSON.stringify([index]));
          navigate("/users");
        }
      });

      setMatched(false);
    }
  };
  return (
    <>
      <div className="main-screen">
        <div className="left">
          <img
            className={matched ? "login-mismatched-img" : "login-mismatched"}
            src="public/Mismathched-new.gif"
            alt=""
          />
          <div className="signin ">
            <h1>Welcome</h1>
            <form
              onSubmit={handleSubmit}
              className={error["email"] ? "error-message-gap" : ""}
            >
              <input
                onChange={handleChange}
                className={matched ? "" : "error"}
                name="email"
                type="text"
                placeholder="Enter e-Mail"
              />
              <p
                className={
                  error["email"] ? "error-message1" : "login-mismatched-img"
                }
              >
                Enter Correct Mail
              </p>
              <input
                onChange={handleChange}
                className={matched ? "" : "error"}
                name="password"
                type="password"
                placeholder="Enter Password"
              />
              <p
                className={
                  error["password"] ? "error-message2" : "login-mismatched-img"
                }
              >
                Password must be of 6 characters
              </p>

              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
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
