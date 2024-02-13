import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting'
import { Center } from '@chakra-ui/layout';
import { Hide, Image, Show } from '@chakra-ui/react'
import Sides from './images/sides.png'
import Rside from './images/right.png'
import Lside from './images/left.png'


const App = () => {

  return (
    <div className='home' color='#eeffff'>
      <Hide below='lg'>
        <Image src={Lside} mr='auto' w='35vw' h='100vh' />
      </Hide>
      <Greeting></Greeting>
      <Hide below='lg'>
        <Image src={Rside} ml='auto' w='35vw' h='100vh' />
      </Hide>
    </div>
  );
}

export default App;
