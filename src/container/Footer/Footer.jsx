import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>


    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__cormorant '>Anyaa Presby(Divine Healing Church)</p>
        <p className='p__cormorant '>+233544006128</p>
        <p className='p__cormorant '>+233274299159</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.ayo} alt='footer_logo'/>
        <p className='p__cormorant'>"The Music That I Have Learned And Want To Give Is Like Worshipping God. Its Absolutely Like A Prayer"</p>
        <p className='p__cormorant'>-Ravi Shankar</p><br/>
        <div className='app__footer-links_icons'>
          <a href=''><FiFacebook/></a>
          <a href=''><FiTwitter /></a>
          <a href=''><FiInstagram /></a>
        </div>
      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__cormorant '>Saturdays - Sundays:</p>
        <p className='p__cormorant '>3:00pm - 6:00pm:</p>
      </div>
    </div>
    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Anyaa Youth Orchestra. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
