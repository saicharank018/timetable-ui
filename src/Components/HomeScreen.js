import React from 'react'
import Navbar from './Navbar'
import { SideMenu } from './SideMenu'
import {Routes,Route,Outlet} from 'react-router-dom'
import Courses from './Courses'

const HomeScreen = () => {
  return (
      
      <>
        <Navbar/>
    <Outlet/>
      </>
  )
}

export default HomeScreen