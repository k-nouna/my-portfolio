import React from 'react'

import Header from '../Header'

import Intro  from '../Intro'


function Banner() {
  return (
        <div className="w-full
                        h-screen
                        max-h-[400px]
                        p-6
                        overflow-hidden
                        block
                        z-10

                        bg-cover
                        bg-no-repeat
                        bg-center
                        bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://www.cpiworld.com/wp-content/uploads/2018/10/Lightbulb-redux.jpeg')]
                    ">
        <Header/>
        <Intro/>
    </div>
  )
}
export default Banner