import React, {useState} from 'react';
import {GiViolin} from 'react-icons/gi';
import {GiHamburgerMenu} from 'react-icons/gi';
import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
      <img src={images.ayo} alt="app logo" />
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href='#home'>Home</a></li>
      <li className='p__opensans'><a href='#about'>About</a></li>
      <li className='p__opensans'><a href='#values'>Values</a></li>
      <li className='p__opensans'><a href='#whatWeDo'>Founder</a></li>
      <li className='p__opensans'><a href='#contact'>Contact</a></li>
    </ul>
    <div className='app__navbar-login'>
      <a href='#booking' className='p__opensans'>Book An Appointment</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <GiViolin fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href='#home'>Home</a></li>
            <li className='p__opensans'><a href='#about'>About</a></li>
            <li className='p__opensans'><a href='#values'>Values</a></li>
            <li className='p__opensans'><a href='#whatWeDo'>Founder</a></li>
            <li className='p__opensans'><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        )}
    
    </div>
  </nav>)
};

export default Navbar;
