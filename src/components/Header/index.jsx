import { useState,React } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navItems = [
  { id: 1,text:'Home',target:'home'},
  { id: 2,text:'My Works',target:'my-works'},
  { id: 3,text:'About Me',target:'about-me'},
  { id: 4,text:'Contact Me',target:'contact-me'},
] 

function Header() {

  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Function to scroll to section
  const scrollToSection = (target) => {
    if (target === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
  <header className='flex justify-end m-4 sm:m-5 lg:m-[20px] relative z-50'>
    {/* Desktop Navigation */}
    <nav className='hidden flex-1 justify-end md:flex text-xl lg:text-2xl gap-2 text-white'>
      {navItems.map(item => (
        <button
            key={item.id}
            className='p-2 lg:p-3 hover:bg-[#2a9df4ff] rounded-xl cursor-pointer duration-300 hover:text-white text-center'
            onClick={() => scrollToSection(item.target)}
          >
            {item.text}
          </button>
        ))}
      </nav>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden p-2 z-50 relative'>
        {nav ? <AiOutlineClose size={24} color='white'/> : <AiOutlineMenu size={24} color={'white'} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[75%] sm:w-[60%] h-full border-r border-r-gray-700 bg-gray-900/95 backdrop-blur-md ease-in-out duration-500 z-40'
            : 'ease-in-out w-[75%] sm:w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-40'
        }
      >
        <div className="pt-20 px-4">
          <div className="mb-8">
            <h2 className="text-white text-2xl font-bold mb-2">Navigation</h2>
            <div className="w-12 h-1 bg-[#2a9df4ff] rounded-full"></div>
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map(item => (
            <li
              key={item.id}
              className='mb-2'
            >
              <button 
                onClick={() => {
                  scrollToSection(item.target);
                  handleNav();
                }}
                className='block w-full text-left p-4 text-white hover:bg-[#2a9df4ff] hover:text-white duration-300 rounded-lg text-lg font-medium'
              >
                {item.text}
              </button>
            </li>
          ))}
        </div>
      </ul>

      {/* Mobile Overlay */}
      {nav && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={handleNav}
        ></div>
      )}
    </header>);
};

export default Header