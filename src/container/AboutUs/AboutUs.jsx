import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about" >
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us </h1>
        <p className='p__cormorant'>Anyaa Youth Orchestra brings together accomplished and passionate musicians to engage the community with enlightening concert presentations.<br/>Guided by principles of excellence in performance and organization,<br/> members enjoy an environment of fun, trust, honor and exchange </p>
        <a href='https://web.facebook.com/vibrantmusicacademy/about/?ref=page_internal'><button type='button' className='custom__button'>Know More</button></a>
      </div>

      <div className='app__aboutus-content_1imgPg2 flex__center'>
        <img src={images.Y} alt='about_img'/>
      </div>

      <div className='app__aboutus-content_vision'>
        <h1 className='headtext__cormorant'>Our Vision</h1>
        <p className='p__cormorant'>We Envision That, Music Lovers Come To Us For Our Excellence In Performance, Organization And Community Engagement. Secondly, We Hope To Aid Every Member Of The A.Y.O To Achieve Full Potential In An Environment Of Fun, Trust, Honor And Exchange, Supported By An Organization With Strong Financial Acumen. We Do Hope The Community Benefits From Our Foward Thinking And Exemplary Youth Orchestra</p>
        <a href = 'https://web.facebook.com/vibrantmusicacademy/videos/?ref=page_internal'><button type='button' className='custom__button'>Know More</button></a>
      </div>

    </div>
  </div>
);

export default AboutUs;
