import { createContext } from "react";
import { useState } from "react";

let SelectedPage= createContext({});
let SelectedPage_provider=({children})=>{
     let [selectedPage,setSelectedPage]=useState("Home")
     return <SelectedPage.Provider value={{selectedPage,setSelectedPage}}>
     {children}
     </SelectedPage.Provider>
}
export{SelectedPage,SelectedPage_provider}