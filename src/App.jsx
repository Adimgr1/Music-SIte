import { useState } from 'react'
import Home from './Components/Home'
import { CurrentPlayingProvider } from './Context/CurrentPlaying'
import { BrowserRouter } from 'react-router-dom'
import Categories from './Pages/Categories'
import { Routes, Route } from 'react-router-dom'
import { SelectedPage_provider } from './Context/SelectedPage'
import { song_chips_current } from './Context/Song_chips_current'
import SignIn from './Pages/Sign-in'
import SignUp from './Pages/Sign-up'
import Users from './Pages/Users'
import { SelecteduserProvider } from './Context/Selecteduser'
import { Logged_provider } from './Context/Logged'
import Check from "./Components/Check"

function App() {
  if(localStorage.getItem("user")===null){
    localStorage.setItem("user","[]")
  }
  return (
    <Logged_provider>
    <BrowserRouter>
    <SelecteduserProvider>
    <SelectedPage_provider>
    <CurrentPlayingProvider>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/users" element={<Users />} />      
    </Routes>
    
    
    </CurrentPlayingProvider>
    </SelectedPage_provider>
    </SelecteduserProvider>
    </BrowserRouter>
    </Logged_provider>
  )

}
  

export default App
