


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';

import '../App.css';

function Header() {
  // State to track whether the user has scrolled
  const [scrolled, setScrolled] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Check the scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Update the state based on the scroll position
    setScrolled(scrollPosition > 0);
  };

  // Attach the handleScroll function to the scroll event on mount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={`Header-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo text-white">OneSchool</div>
      <div className="buttons">
      <Link to="home" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Home
        </Button>
      </Link>

      <Link to="courses" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Courses
        </Button>
      </Link>

      <Link to="programs" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Programs
        </Button>
      </Link>

      <Link to="teachers" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Teachers
        </Button>
      </Link>
        
    
      </div>
      <div className="contactus">

      <Link to="contact" smooth={true} duration={500} offset={-70}>
      <Button className={`bg-indigo-700 text-white hover:bg-indigo-900 ${scrolled ? 'scrolled' : ''}`}>
          Contact Us
        </Button>
      </Link>
        
      </div>
    </div>
  );
}

export default Header;
