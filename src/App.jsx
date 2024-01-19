import React from 'react'
import styles from './App.css'
import 'aos/dist/aos.css'
import AnimatedCursor from "react-animated-cursor"

import Navigator from './Home/pages/Navigator'



const App = () => {
  return (
    
    <div className={styles}>
            <AnimatedCursor
            outerSize={16}
            innerSize={8}
            color='255, 165, 0'
            outerAlpha={0.2}
            innerScale={0.4}
            outerScale={5} />

      <Navigator/>

    </div>
  )
}

export default App