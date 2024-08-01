import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


const home = () => {
  return (
    <div className="container mx-auto fade-in" id="home">
    
        <span className="text-7xl font-bold leading-relaxed" >
            <h1>Hey,</h1>
            I'm  
            <Typewriter
                words={[" an Engineer", " a developer", " a student", " Sooraj"]}
                loop={1}
                cursor
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
            />
        </span>
    </div>
    
  )
}

export default home