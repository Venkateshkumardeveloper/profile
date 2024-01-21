import React from 'react'
// import Nav from './Navbar/Nav'
import Banner from './Banner/Banner'
import Biography from './Biography/Biography'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Myportfolio from './Myportfolio/Myportfolio'
import Contact from './Contact/Contact'


const Home = () => {
  return (
    <div >
        {/* <Nav/> */}
        <Banner/>
        <Biography/>
        <Experience/>
        <Education/>
        <Myportfolio/>
        <Contact/>
      
    </div>
  )
}

export default Home