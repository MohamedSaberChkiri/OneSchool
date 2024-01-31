// import { Button } from '@/components/ui/button'
// import React from 'react'
// import '../App.css'

// function Header() {
//   return (
//     <div className='Header-container'>
//         <div className="logo text-white">OneSchool</div>
//         <div className="buttons">
//             <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Home</Button>
//             <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Courses</Button>
//             <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Programs</Button>
//             <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">Teachers</Button>
//         </div>
//         <div className="contactus">
//             <Button className='bg-indigo-700 text-white hover:bg-indigo-900' >Contact Us</Button>
//         </div>


//     </div>
//   )
// }

// export default Header


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
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
        <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Home
        </Button>
        <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Courses
        </Button>
        <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Programs
        </Button>
        <Button variant="ghost" className="text-white hover:bg-indigo-700 hover:text-white">
          Teachers
        </Button>
      </div>
      <div className="contactus">
        <Button className={`bg-indigo-700 text-white hover:bg-indigo-900 ${scrolled ? 'scrolled' : ''}`}>
          Contact Us
        </Button>
      </div>
    </div>
  );
}

export default Header;
