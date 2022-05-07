import React from 'react'
import Register from './Components/Register'
import {Routes,Route} from 'react-router-dom'
import Login from './Components/Login'
import HomeScreen from './Components/HomeScreen'
import Courses from './Components/Courses'
import Lecturers from './Components/Lecturers'
import Home2 from './Components/Dashboard'
const Home = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route path='/login' element={<Login/> }/> 
        {/* <Navbar/> */}
        <Route path='home' element={<HomeScreen/>}>
            <Route path='dashboard'  element={<Home2/>}/>
            <Route path='courses' element={<Courses/>}/>
            <Route path='lecturers' element={<Lecturers/>}/>

        </Route>
    </Routes>
  )
}

export default Home