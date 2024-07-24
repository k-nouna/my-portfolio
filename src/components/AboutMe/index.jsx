import React from 'react'

function AboutMe() {
  return (
    <div className='n-about-me'>
        <h1>About Me</h1>
        <div className='n-about-me-text'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, nisi tenetur corrupti unde, sit commodi consequatur excepturi velit ullam at id architecto dignissimos quidem quas nam facere nemo, delectus laborum.</p>
        </div>
        <div className='n-about-me-btn'>
            <button className='n-btn-cv'>
                Download CV
            </button>
            <button className='n-btn-contact'>
                Contact me
            </button>
        </div>
    </div>
  )
}

export default AboutMe