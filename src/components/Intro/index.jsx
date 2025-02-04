import React from 'react'
import './Intro.css'

import Typed from 'typed.js'

function Intro() {
    // Create reference to store the DOM element containing the animation
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ['KAMBDETEY Lionel'],
        typeSpeed: 150,
        loop:true
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);
  return (
    <div className="container">
      <h1 className='font-extrabold text-5xl text-white'>Hi !</h1>
      <h2 className='text-3xl font-extrabold text-white md:text-5xl'>I'm <span ref={el}></span></h2>
    </div>
  )
}

export default Intro