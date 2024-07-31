import React from 'react'
import PropTypes from 'prop-types'

function Card({topic,domains, technologies, description}) {
  return (
        <div class="flex flex-col min-w-[200px] h-[250px]  p-3  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 items-center ">
            <a href="#">
                <h5 class="font-bold tracking-tight text-gray-900 dark:text-white">{topic}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2a9df4ff] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
            </a>
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