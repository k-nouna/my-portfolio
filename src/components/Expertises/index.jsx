import React from 'react'
import { FaBrain, FaRobot, FaMobile, FaCode } from 'react-icons/fa'

// Map icon names to React icons
const iconMap = {
  brain: <FaBrain className="text-4xl text-[#2a9df4ff]" />,
  robot: <FaRobot className="text-4xl text-[#2a9df4ff]" />,
  mobile: <FaMobile className="text-4xl text-[#2a9df4ff]" />,
  code: <FaCode className="text-4xl text-[#2a9df4ff]" />
}

function Expertises({ services }) {
  return (
    <section className='py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-8 sm:mb-12 animate-fadeInUp'>
                <span className='text-[#2a9df4ff] font-semibold text-sm uppercase tracking-wider mb-2 block'>Services</span>
                <h1 className='text-gray-900 text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight'>Field of interest</h1>
                <p className='text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed'>
                    Custom technological solutions to transform your ideas into digital reality.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 animate-fadeInUp">
                {services.map((service, index) => (
                  <div key={index} className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-gray-100 hover-lift">
                    <div className="mb-4 sm:mb-6 flex justify-center">
                      <div className="p-3 sm:p-4 bg-[#2a9df4ff]/10 rounded-2xl group-hover:bg-[#2a9df4ff]/20 transition-all duration-300">
                        {iconMap[service.icon]}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900 group-hover:text-[#2a9df4ff] transition-colors duration-300 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{service.description}</p>
                    
                    <div className="mt-4 sm:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-12 h-1 bg-gradient-to-r from-[#2a9df4ff] to-[#1e7bb8] rounded-full mx-auto"></div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Expertises