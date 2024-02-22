import exp from 'constants';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'
import TV from '../images/tv.png'
import { url } from 'inspector';

const spanStyle = {
  padding: '20px',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '12vh',
  width: '16vw',
  transform:'auto',
  translateY:'-24vh',
  translateX:'9vw',
}

const slideImages = [
  {
    caption: 'Slide 1'
  },
  {
    caption: 'Slide 2'
  },
  {
    caption: 'Slide 3'
  },
];

const properties = {
    prevArrow: <p/>,
    nextArrow: <p/>
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow