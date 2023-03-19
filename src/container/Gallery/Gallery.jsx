import {React, useRef} from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -=300;
    }else{
      current.scrollLeft += 300;
    }
  }

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__cormorant' style={{color:'#AAA', marginTop:'2rem'}}>Visit Our Social Media Platforms Which Includes Facebook, Instagram and Others. Follow Us On Every Platform To Recieve Updates About A.Y.O's Concerts, Events And Celebrations</p>
        <a href='https://www.instagram.com/anyaa_youth_orchestra/'><button type='button' className='custom__button'>View More</button></a>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images__card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery Image" />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icons' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icons' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
