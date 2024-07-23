import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/my-works'>My Works</Link>
        <Link to='/about-me'>About Me</Link>
        <Link to='/contacts'>Contacts</Link>
    </nav>
  )
}

export default Header