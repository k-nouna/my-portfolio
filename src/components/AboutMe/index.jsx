import React from 'react'
import Profile from '../../assets/nouna.jpg'
function AboutMe() {
  return (
    <section id='about-me' name="about-me" className='flex flex-col items-center gap-2 md:gap-5 my-[20px] mx-[10px] md:m-[10%] md:flex-row'>
        <img src={Profile} alt="Lionel Kambdetey" srcset="" className='rounded-full w-[200px] md:w-[30%] justify-center border-[#2a9df4ff]' />
        <div className='flex gap-2 flex-col items-center text-center justify-center md:text-left'>
            <h1 className='text-black text-4xl font-extrabold'>About Me</h1>
            <h2 className='text-larger md:text-2xl text-gray-500 '>AI Engineer - Entrepreuner</h2>
            <p className='md:text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, nisi tenetur corrupti unde, sit commodi consequatur excepturi velit ullam at id architecto dignissimos quidem quas nam facere nemo, delectus laborum.</p>
            <div className='abme-btn-container flex gap-2'>
                <button className='hover:bg-gray-500 bg-[#2a9df4ff] text-white font-bold py-2 px-4 rounded'>
                    Download CV
                </button>
                <button className='bg-transparent border border-[#2a9df4ff] hover:bg-[bg-[#2a9df4ff] text-[#2a9df4ff] hover:text-white hover:bg-[#2a9df4ff] font-bold py-2 px-4 rounded'>
                    <a href='#contact-me'>Contact Me</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default AboutMe