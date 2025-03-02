import React, { useEffect, useState } from 'react';
import { MENU_LINKS } from '../utils/data';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
        if (window.innerWidth < 768) {
          setIsOpen(false); // Close the menu when scrolling down on mobile
        }
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`container mx-auto fixed top-5 left-1/2 transform -translate-x-1/2 transition-all duration-300 z-10 flex text-center justify-center ${isScrollingDown ? 'w-[300px]' : 'w-full'}`}>
      <div className={`flex items-center justify-center transition-all duration-300 container mx-auto border border-gray-50 backdrop-blur-[10px] rounded-full bg-white/25 m-0 md:p-5 lg:p-5 p-3 ${isScrollingDown ? 'justify-center w-[300px] px-6 py-2' : 'justify-center w-auto md:m-5 p-3 md:p-0'}`}>
        
        {/* Hamburger Icon (Visible only on small screen) */}
        <button className={`block md:hidden text-primary mx-7 focus:outline-none ${isScrollingDown ? 'hidden' : ''}`} onClick={toggleMenu}>
          <svg className="w-6 h-6" fill='none' stroke='currentColor' viewBox="0 0 24 24" xmlns='https://www.w3.org/2000/svg'>
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              /> 
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-11 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul className={`${isOpen && !isScrollingDown ? "flex   " : "hidden"} menu-wrapper bg-black bg-opacity-50 md:bg-inherit lg:bg-inherit backdrop-blur-sm z-0 text-[white] transition-all duration-300 justify-center`}>
          {MENU_LINKS.map(item => (
            <li key={item.id}>
              <Link activeClass="active" to={item.to} smooth spy offset={item.offset} className="menu-item">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <a href="mailto:johnpauljamito5@gmail.com">
          <button className={`h-10 text-[15px] font-medium text-[white] bg-gradient-primary rounded-full px-14 transition-all duration-300 hover:scale-105 cursor-pointer ${isScrollingDown ? 'block scale-125' : 'hidden'}`}>Contact Me</button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;