import { createContext, useState } from "react";

let CurrentPlaying = createContext({});
function CurrentPlayingProvider({ children }) {
  let [currentPlaying, setCurrentPlaying] = useState();
  return (
    <CurrentPlaying.Provider value={{ currentPlaying, setCurrentPlaying }}>
      {children}
    </CurrentPlaying.Provider>
  );
}
export { CurrentPlaying, CurrentPlayingProvider };