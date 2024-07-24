import React from 'react'
import PropTypes from "prop-types";

function Work({topic,picture,domain,description,techonology}) {
  return (
    <div className='n-work-card'>
        <img className='work-img' src={picture} alt="" srcset="" />
        <h3 className='work-title'>{topic}</h3>
        <p className='work-desc' >{description}</p>
        <p className='work-domain'>{domain}</p>
        <div className="work-techno">
          {techonology.map((tech,index)=>(
            <Work key={`${tech.name}-${index}`}
                  logo={tech.logo}/>
          ))}
        </div>
    </div>
  )
}

// Restriction des types de données
Work.propTypes = {
  topic: PropTypes.string,
  picture: PropTypes.string,
  domain: PropTypes.string,
  description: PropTypes.string,
}
 export default Work
