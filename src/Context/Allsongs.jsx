import { createContext, useState } from "react";

let Allsongs= createContext({});

function Allsongs_provider({children}){
     let [songList, setSongList]=useState();
     return(
          <Allsongs.Provider value={{songList, setSongList}}>
               {children}
          </Allsongs.Provider>
     )
}
export {Allsongs, Allsongs_provider};