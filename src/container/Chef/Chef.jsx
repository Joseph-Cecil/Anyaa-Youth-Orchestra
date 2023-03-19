import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const ceo = () => (
  <div className='app__bg app__wrapper section__padding' id=''>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="Mr Ackerson" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Founder's Word" />
      <h1 className="headtext__cormorant">What We Do</h1>

      <div className="app__ceo-content">
        <div className="app__ceo-content_quote">
          <img src={images.quote} alt="quote"/>
          <p className="p__cormorant"> A.Y.O Aims To Provide Training For Young Children </p>
        </div>
        <p className="p__cormorant">Who Have Great Interest Wish To Have Access To Music Education And Also To Develop Thier Talents By Way Of Capitalizing On Their Passion And Love For Music. The Program Is A Consolidation Of Various Aspects Of Music And Cultural Theories. The A.Y.O Program Also Emphasizes The Ability To Play Well, To Efficiently Teach, Have Solid And Incrediblr Recital Works And Make Articulate Presentations Periodically By Bringing All The Student Players From All Locations Together In Beautiful Concerts. MOst Of These Are Drawn From Morning Star School, German Swiss School, Music Without Borders Foundation And Open To All Children With A Great Desire Of Being Part Of Such A Worthy Cause.</p>
      </div>
      <div className="app__ceo-sign">
        <p>Mr George Ackerson</p>
        <p className="p__cormorant">Founder & Teacher</p>
      </div>
    </div>
  </div>
);

export default ceo;
