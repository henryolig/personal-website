import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Image, Text, Container } from '@chakra-ui/react'
import Me from './images/medrawing1.png'


const Error404 = () => {

  return (
    <div className='home' color='#eeffff'>
      <Container minW='100vw' display={'flex'} justifyContent={'space-around'}>
        <Container display='flex' flexDir='column' alignItems={'center'} justifyContent='space-around' minW='75vw'>
          <Link to='/'>
            <Image src={Me} mt='15vh' w='15vw'/>
          </Link>
          <Text fontSize='9xl'>Hey...</Text>
          <Text fontSize='7xl'>How did you get here?</Text>
          <Text fontSize='7xl' mb='15vh'>Click on my face to return to safety</Text>
        </Container>
      </Container>
    </div>
  );
}

export default Error404;
