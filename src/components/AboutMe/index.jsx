import React from 'react'
import Profile from '../../assets/nouna.jpg'
import portfolioData from '../../data/portfolio.json'

function AboutMe() {
  const { personalInfo } = portfolioData;
  
  return (
    <section id='about-me' name="about-me" className='py-16 px-4 md:px-10 bg-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col items-center gap-8 md:gap-12 md:flex-row'>
                <div className='animate-fadeInLeft flex-shrink-0'>
                    <div className='relative'>
                        <img 
                            src={Profile} 
                            alt={personalInfo.name} 
                            className='rounded-2xl w-[280px] md:w-[350px] shadow-2xl hover-lift' 
                        />
                        <div className='absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#2a9df4ff]/20 to-transparent'></div>
                    </div>
                </div>
                
                <div className='flex flex-col items-center text-center md:text-left md:items-start flex-1 animate-fadeInRight'>
                    <div className='mb-6'>
                        <span className='text-[#2a9df4ff] font-semibold text-sm uppercase tracking-wider mb-2 block'>About</span>
                        <h1 className='text-gray-900 text-4xl md:text-5xl font-bold mb-4 leading-tight'>
                            Who Am I?
                        </h1>
                        <h2 className='text-xl md:text-2xl text-gray-600 font-medium mb-6'>{personalInfo.title}</h2>
                    </div>
                    
                    <p className='text-gray-700 text-lg leading-relaxed mb-8 max-w-2xl'>{personalInfo.bio}</p>
                    
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <a 
                            href={personalInfo.cvPath}
                            download="Lionel_Kambdetey_Resume.pdf"
                            className='bg-[#2a9df4ff] hover:bg-[#1e7bb8] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover-lift text-center inline-flex items-center justify-center gap-2'
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download Resume
                        </a>
                        <a 
                            href='#contact-me' 
                            className='border-2 border-[#2a9df4ff] text-[#2a9df4ff] hover:bg-[#2a9df4ff] hover:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 text-center'
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe