import React, { useState } from 'react';
import { Image, Container, Center, Img, Text, background } from '@chakra-ui/react'
import TV from '../images/tv.png'
import './Reviews.css'
import Slideshow from './Slideshow';

const Reviews = () => {

  return (
    <div>
      <Container m='0' minW='45vw' mt='10vh'>
        <Text fontFamily={'SchoolBell'} color={'#451111'} fontSize='3vw'>Glowing customer reviews:</Text>
        <Image src={TV} minW='40vw'/>
      </Container>
    </div>
  );
}
  
  export default Reviews;