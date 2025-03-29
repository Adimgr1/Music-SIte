import { createContext, useState } from "react";

let Logged_context= createContext();
function Logged_provider({children}){
    let [logged, setLogged]= useState(false);
    return(
        <Logged_context.Provider value={{logged, setLogged}}>
            {children}
        </Logged_context.Provider>
    )
}
export {Logged_context, Logged_provider}