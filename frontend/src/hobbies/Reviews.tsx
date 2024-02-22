import React, { useState } from 'react';
import { Image, Container, Center, Img, Text, background } from '@chakra-ui/react'
import TV from '../images/tv.png'
import './Reviews.css'
import Slideshow from './Slideshow';

const Reviews = () => {

  return (
    <div>
      <Container m='0' minW='45vw' mt='10vh'>
        <Text fontFamily={'SchoolBell'} color={'#451111'} fontSize='9xl'>Glowing customer reviews:</Text>
        <Image src={TV} minW='40vw'/>
        {/* <Text transform='auto' 
          fontFamily={'SchoolBell'} 
          fontSize={'8xl'} 
          translateY={'-24vh'} 
          translateX={'9vw'}>
          Hello There
        </Text> */}
      </Container>
    </div>
  );
}
  
  export default Reviews;