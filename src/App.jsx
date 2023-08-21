import React from 'react'
import Home from './components/HOME/Home'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Wishlist from './components/WISHLIST/Wishlist'
import Profile from './components/PROFILE/Profile'
import Bag from './components/BAG/Bag'
import { ToastContainer } from 'react-toastify';
import Bynow from './components/BUYNOW/Bynow'

const App = () => {
  return (
    <div>
       {/* <BrowserRouter>
       <Home/>
       <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Wishlist' element={<Wishlist/>}/>
       </Routes>
       </BrowserRouter> */}

       <Router>
        {/* <Home/> */}
        <Routes>
          <Route exact path='/' Component={Home}/>
          <Route path='/wishing' Component={Wishlist}/>
          <Route path='/profile' Component={Profile}/>
          <Route path='/bag' Component={Bag}/>
          <Route path='/buynow' Component={Bynow}/>
        </Routes>
       </Router>
    
       <ToastContainer />

    </div>
  )
}

export default App
