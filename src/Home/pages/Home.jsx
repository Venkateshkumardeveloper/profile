import React from 'react'
import Nav from './Navbar/Nav'
import Banner from './Banner/Banner'
import Biography from './Biography/Biography'
import Experience from './Experience/Experience'

const Home = () => {
  return (
    <div >
        <Nav/>
        <Banner/>
        <Biography/>
        <Experience/>
    </div>
  )
}

export default Home