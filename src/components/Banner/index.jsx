import React from 'react'

import Header from '../Header'

import Intro  from '../Intro'


function Banner() {
  return (
        <div id="home" className="w-full
                        h-[100vh]
                        min-h-[500px]
                        max-h-[800px]
                        
                        overflow-hidden
                        block
                        z-10
                        relative

                        bg-cover
                        bg-no-repeat
                        bg-center
                        bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.7),rgba(0,0,0,0.5)),url('https://www.cpiworld.com/wp-content/uploads/2018/10/Lightbulb-redux.jpeg')]
              ">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        <div className="relative z-10 h-full">
            <Header/>
            <Intro/>
        </div>
    </div>
  )
}
export default Banner