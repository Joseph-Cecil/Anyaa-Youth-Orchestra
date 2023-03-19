import React from 'react';
import { SubHeading } from '../../components';
import {images} from '../../constants';

import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className='app__values flex__center section__padding' id="values">
    <div className='app__values-title' style={{margin: "2rem 0"}}>
      <h2 className='headtext__cormorant'>We Uphold The Following Values</h2>
      <div className='app__values-content' >
      <ul className='p__cormorant'>
        <li>
          <h3 className='p__cormorant' style={{color:'#DCCA87'}}>EXCELLENCE</h3>
          <br/>
          <p className='p__cormorant' >We Come Musically Prepared And Highly Organized. Also We Excel In Performance And Community Engagement</p>
        </li>
        <br/><br/><br/>
        <li>
          <h3 style={{color:'#DCCA87'}}>ACCOUNTABILITY</h3>
          <br/>
          <p>Memebers Take A Personal Stake In Our Organization And Maintain High Standards. We Are Responsible To Each Other And DO Respect The Values Of Our Partners. We Are Fiscally Responsible. Not Forgetting Transparency To Ur Stakeholders</p>
        </li>
        <br/><br/><br/>
        <li>
          <h3 style={{color:'#DCCA87'}}>TEAM WORK</h3>
          <br/>
          
            <p>We Treat Others With Respect.</p>
            <br/>
            <p>We Build Trust.</p>
            <br/>
            <p>We Foster Collaboration.</p>
            <br/>
            <p>We Have High Expections Of Ourselves And Each Other</p>
            <br/>
            <p>We Are Welcoming And Encouraging.</p>
          
        </li>
        <br/><br/><br/>
        <li>
          <h3 style={{color:'#DCCA87'}}>COMMUNITY ENGAGEMENT</h3>
          <br/>
          <p>We Look Forward To Collaborate With Other Art Organizations And Make Our Events Accessible To Many Audiences. A.Y.O Reaches Out To The Community And We Learn From Our Friends As Much As They Learn From Us. We Earn The Community's Respect And Confidence.</p>
        </li>
        <br/><br/><br/>
        <li>
          <h3 style={{color:'#DCCA87'}}>CELEBRATION</h3>
          <br/>
          
            <p>We Embody The Joy Of Making Music.</p>
            <br/>
            <p>We Embrace A Wide Range Of Music.</p>
            <br/>
            <p>We Identify Every Individual's Success.</p>
            <br/>
            <p>We Recgonize The Team Behind Every Individual</p>
            <br/>
            <p>We Express Our Gratitude For The Community's Support.</p>
          
        </li>
      </ul>

      </div>
    </div>
    <div style={{marginTop: '15px'}}>
      <a href='https://web.facebook.com/vibrantmusicacademy/events/?ref=page_internal'><button type='button' className='custom__button'>View More</button></a>
    </div>
    <div className='app__values-content_img'>
      
    </div>

  </div>
);

export default SpecialMenu;
