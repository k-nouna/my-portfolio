import React from 'react'
import './Intro.css'
import Typed from 'typed.js'
import portfolioData from '../../data/portfolio.json'

function Intro() {
    const { personalInfo } = portfolioData;
    const el = React.useRef(null);

    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [personalInfo.name],
        typeSpeed: 150,
        loop:true
      });

      return () => {
        typed.destroy();
      };
    }, []);
  return (
    <div className="container flex flex-col items-center justify-center h-full text-center px-4">
      <div className="animate-fadeInUp">
        <h1 className='font-extrabold text-4xl md:text-6xl text-white mb-4 drop-shadow-2xl' style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8)'}}>
          Hello! 👋
        </h1>
        <h2 className='text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-xl' style={{textShadow: '2px 2px 6px rgba(0,0,0,0.7)'}}>
          I'm <span ref={el} className="text-[#2a9df4ff] drop-shadow-lg"></span>
        </h2>
        <p className='text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-lg font-medium' style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}>
          {personalInfo.title}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#about-me" 
            className="bg-[#2a9df4ff] hover:bg-[#1e7bb8] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover-lift shadow-2xl"
          >
            Discover My Profile
          </a>
          <a 
            href="#my-works" 
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm bg-white/10"
          >
            View My Projects
          </a>
        </div>
      </div>
    </div>
  )
}

export default Intro