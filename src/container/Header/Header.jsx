import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Come Join Us Play "/>
      <h1 className="app__header-h1">Anyaa Youth Orchestra</h1>
      <p className="p__cormorant" style={{margin: "2rem 0"}}>Anyaa Youth Orchestra embraces challenges and nutures innovation. Developing the potential of individualsis of great importance to us</p>
      <a href="https://web.facebook.com/vibrantmusicacademy/"><button type='button' className='custom__button'>Explore</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
