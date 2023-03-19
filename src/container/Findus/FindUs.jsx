import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{marginBottom:' 3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__cormorant">Address</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0'}}>Working Hours</p>
        <p className="p__cormorant">wdt</p>
        <p className="p__cormorant">wet</p>
      </div>
      <a href="https://web.facebook.com/vibrantmusicacademy/reviews/?ref=page_internal"><button className="custom__button" style={{marginTop: '2rem'}}></button>Text Us</a>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="find Us" />
    </div>
  </div>
);

export default FindUs;
