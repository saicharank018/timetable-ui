import React from 'react'
import Register from './Components/Register'
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import HomeScreen from './Components/HomeScreen'

const Home = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/> }/> 
        <Route path='/Home' element={<HomeScreen/>}/>
    </Routes>
  )
}

export default Home