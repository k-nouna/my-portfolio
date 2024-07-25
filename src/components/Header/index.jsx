import { useState,React } from 'react'
import {Link} from 'react-router-dom'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navItems = [
  { id: 1,text:'Home'},
  { id: 2,text:'My Works'},
  { id: 3,text:'About Me'},
  { id: 4,text:'Contact Me'},
] 

function Header() {

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  return (
  <header className='flex justify-end items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
    {/* Desktop Navigation */}
    <ul className='hidden md:flex'>
      {navItems.map(item => (
        <Link
            key={item.id}
            className='p-3 hover:bg-[#2a9df4ff] rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
          >
            {item.text}
          </Link>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
      </ul>
    </header>);
};

export default Header