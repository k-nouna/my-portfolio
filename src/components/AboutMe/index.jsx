import React from 'react'
import Profile from '../../assets/nouna.jpg'
function AboutMe() {
  return (
    <section id='about-me' className='flex m-[10%]'>
        <div className="abme-img flex mr-[30px]">
            <img src={Profile} alt="Lionel Kambdetey" srcset="" />
        </div>
        <div className='abme-text text-left justify-start'>
            <h1 className='text-black text-5xl font-extrabold'>About Me</h1>
            <h2 className='text-2xl text-gray-500 mb-10'>AI Engineer - Entrepreuner</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, nisi tenetur corrupti unde, sit commodi consequatur excepturi velit ullam at id architecto dignissimos quidem quas nam facere nemo, delectus laborum.</p>
            <div className='abme-btn-container'>
                <button className='btn-cv'>
                    Download CV
                </button>
                <button className='btn-contact'>
                    <a href='#contact-me'>Contact Me</a>
                </button>
            </div>
        </div>
        
    </section>
  )
}

export default AboutMe