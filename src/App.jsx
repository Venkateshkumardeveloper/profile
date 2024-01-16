import React from 'react'
import Home from './Home/pages/Home'
import styles from './App.css'
import 'aos/dist/aos.css'
import AnimatedCursor from "react-animated-cursor"



const App = () => {
  return (
    
    <div className={styles}>
      <h1>Hello</h1>
            <AnimatedCursor
            outerSize={16}
            innerSize={8}
            color='255, 165, 0'
            outerAlpha={0.2}
            innerScale={0.4}
            outerScale={5} />

        <Home/>

    </div>
  )
}

export default App