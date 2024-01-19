import React from 'react'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Nav from './Navbar/Nav'
import Banner from './Banner/Banner'
import Biography from './Biography/Biography'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Contact from './Contact/Contact'
import Myportfolio from './Myportfolio/Myportfolio'

const Navigator = () => {
    
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/banner' element={<Banner/>} />
            <Route path='/bio' element={<Biography/>} />
            <Route path='/exp' element={<Experience/>} />
            <Route path='/edu' element={<Education/>} />
            <Route path='/con' element={<Contact/>} />
            <Route path='/portfolio' element={<Myportfolio/>} />



            
        </Routes>
    </div>
  )
}

export default Navigator