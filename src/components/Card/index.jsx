import React from 'react'
import PropTypes from 'prop-types'

function Card({topic,picture,domain}) {
  return (
    <div className='n-work-card'>
        <img src={picture} alt="" srcset="" />
        <h3>{topic}</h3>
        <p>{domain}</p>
        <button type="button" >Read more</button>
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