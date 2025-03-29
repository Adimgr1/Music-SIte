import { createContext, useContext, useState } from "react";

let song_chips_current = createContext({});
function Song_chips_current_provider({ children }) {
  let [currentchips, setCurrentchips] = useState({});
  let [playingGeneral, setPlayingGeneral] = useState(false);
  let [playingFeatured, setPlayingFeatured] = useState({
     0:false,
     1:false,
     2:false,
     3:false,
     4:false,
  });
  return (
    <song_chips_current.Provider
      value={{
        currentchips,
        setCurrentchips,
        playingFeatured,
        playingGeneral,
        setPlayingGeneral,
        setPlayingFeatured,
      }}
    >
      {children}
    </song_chips_current.Provider>
  );
}
export { Song_chips_current_provider, song_chips_current };
