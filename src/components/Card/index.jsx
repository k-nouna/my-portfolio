import React from 'react'
import PropTypes from 'prop-types'

function Card({topic, domains, technologies, description}) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift p-8 m-3 min-h-[380px] w-full max-w-md mx-auto border border-gray-100">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2a9df4ff] to-[#1e7bb8] rounded-t-2xl"></div>
      
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2a9df4ff] transition-colors duration-300">
            {topic}
          </h3>
          
          <div className="flex flex-wrap gap-1 mb-3">
            {domains && domains.map((domain, index) => (
              <span key={index} className="px-2 py-1 text-xs font-medium bg-[#2a9df4ff]/10 text-[#2a9df4ff] rounded-full">
                {domain}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-4">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies && technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md font-medium">
                {tech.name}
              </span>
            ))}
            {technologies && technologies.length > 3 && (
              <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md font-medium">
                +{technologies.length - 3}
              </span>
            )}
          </div>
          
          <button className="w-full bg-[#2a9df4ff] hover:bg-[#1e7bb8] text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105">
            View Project
          </button>
        </div>
      </div>
    </div>
  )
}

// PropTypes
Card.propTypes = {
    topic: PropTypes.string,
    picture: PropTypes.string,
    domain: PropTypes.string
}

 export default Card