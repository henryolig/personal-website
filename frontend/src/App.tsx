import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import { Center } from '@chakra-ui/layout';
import { Container, Hide, Image, Show, Text } from '@chakra-ui/react'
import Sides from './images/sides.png'
import Rside from './images/right.png'
import Lside from './images/left.png'
import FLside from './images/FirstLeft.png'
import GetTime from './components/getTime';


const App = ( ) => {
  const [serious, setSeriousness] = useState(!GetTime());
  if(serious) {
    return (
      <Center m='0' p='0' minW='100vw' minH='100vh' bgColor='#1B1D1F'>
        <Text fontSize='4vw' color='#ebebeb' w='max-content' onClick={() => setSeriousness(false)}>WHOAAAA</Text>
      </Center>
    );
  } else {
    return (
      <div className='home' color='#eeffff'>
        <Hide below='lg'>
          <Image overflow='hidden' src={Lside} mr='auto' w='35vw' h='100vh' />
        </Hide>
        <Greeting></Greeting>
        <Hide below='lg'>
          <Image overflow='hidden' src={Rside} ml='auto' w='35vw' h='100vh' />
        </Hide>
      </div>
    );
  }
}

export default App;
