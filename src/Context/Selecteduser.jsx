import { createContext,useState } from "react";

let  selecteduser = createContext({});
function SelecteduserProvider({ children }) {
     let [selected, setSelected] = useState([]);
     return (
          <selecteduser.Provider value={{ selected, setSelected }}>
               {children}
          </selecteduser.Provider>
     );
}
export { selecteduser, SelecteduserProvider };