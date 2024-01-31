


import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-scroll';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';

import '../App.css';

function Header() {


  // -------------------------------------------------------------------------------------------------------------------


  const [state, setState] = React.useState({
  
  
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className="bg-indigo-400 h-full"
    >
      <List className='sidebarmenu-container'>

      <div className="logo text-white">OneSchool</div>
      <Divider/>


      <Link className='sidebarLink w-full' to="home" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="w-11/12 text-white bg-indigo-600 hover:bg-indigo-700  hover:text-white">
          Home
        </Button>
      </Link>

      <Divider />

      <Link className='sidebarLink w-full' to="courses" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="w-11/12 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white">
          Courses
        </Button>
      </Link>

      <Divider />

      <Link className='sidebarLink w-full' to="programs" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="w-11/12 text-white bg-indigo-600 hover:bg-indigo-700 hover:text-white">
          Programs
        </Button>
      </Link>

      <Divider />

      <Link className='sidebarLink w-full' to="teachers" smooth={true} duration={500} offset={-70}>
      <Button variant="ghost" className="w-11/12 text-white  bg-indigo-600 hover:bg-indigo-700 hover:text-white">
          Teachers
        </Button>
      </Link>

      <Divider/>

      <Link className='sidebarLink w-full' to="contact" smooth={true} duration={500} offset={-70}>
      <Button className={` w-11/12 bg-indigo-700 text-white hover:bg-indigo-900 ${scrolled ? 'scrolled' : ''}`}>
          Contact Us
        </Button>
      </Link>
        

      </List>
      
    
    </Box>
  );





  // -------------------------------------------------------------------------------------------------------------------
 





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
      <div className="buttons hidden sm:inline-block">

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
      <Button className={`bg-indigo-700 text-white  hidden sm:inline-block hover:bg-indigo-900 ${scrolled ? 'scrolled' : ''}`}>
          Contact Us
        </Button>
      </Link>
        


      <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="inline-block sm:hidden ">
           
            Menu
               
               </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>


      </div>
    </div>
  );
}

export default Header;
