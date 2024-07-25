import React from 'react'

import Header from '../Header'

// Banner background
import Background from '../../assets/banner1.jpg'


function Banner() {
  return (
        <div className="w-full
                        h-screen
                        max-h-[600px]
                        p-6
                        overflow-hidden
                        block
                        z-10

                        bg-cover
                        bg-no-repeat
                        bg-center
                        bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://www.cpiworld.com/wp-content/uploads/2018/10/Lightbulb-redux.jpeg')]
                    ">
        <Header/>
    
        
    </div>
  )
}
export default Banner