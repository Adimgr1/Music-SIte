import { useContext } from "react"
import { Logged_context } from "../Context/Logged"
import { useNavigate } from "react-router-dom"
export default function Check(children){
     let {logged}= useContext(Logged_context)
     let navigate = useNavigate();
     return(
          <>
          {logged ? children : navigate("/sign-in")}


          </>

     )
};