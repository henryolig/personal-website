import React, { useState } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import { Center } from '@chakra-ui/layout';
import { Container, Divider, Hide, Image, Text } from '@chakra-ui/react'
import Rside from './images/right.png'
import Lside from './images/left.png'
// import Sides from './images/sides.png'
// import FLside from './images/FirstLeft.png'
import GetTime from './components/getTime';
import internal from 'stream';
import DNavvy from './components/dark/DNavvy';
import { useMode } from './context/ModeContext';

interface datas {
  name: string,
  amount: string
}

const Metric = ({ name, amount }: datas) => {
  return (
    <Container display="flex"
      bgColor="#121212"
      flexDir="column"
      justifyContent="center" 
      alignItems="center" 
      width="20vw"
      height="max-content">
        <Text color="#ebebeb" fontWeight="bold" fontSize="3vw" cursor="pointer">{amount}</Text>
        <Text color="#ebebeb" fontWeight="light" fontSize='1vw'>{name}</Text>
    </Container>
  )
};

const info: datas[] = [
  {
    name: "SWE Internships",
    amount: "2"
  },
  {
    name: "Programming Languages",
    amount: "11"
  },
  {
    name: "AAAAH",
    amount: "21"
  },
  {
    name: "Bass riffs",
    amount: "5"
  }
];

const App = () => {
  const { mode, toggleMode } = useMode();
  if(mode) {
    return (
      <Container m='0' p='0' minW='100vw' minH='100vh' bgColor='#121212'>
        <DNavvy/>
        <Center pt='10vh' bg='#121212' flexDir='column'>
            <Text fontWeight="Bold" fontSize='8vw' color='#ebebeb' w='max-content' onClick={() => toggleMode()}>Hi,</Text>
            <Text fontWeight="Bold" fontSize='8vw' color='#ebebeb' w='max-content'
            bgGradient="linear(to-l, pink.300, purple.500)"
            bgClip="text">I'm Henry</Text>
        </Center>
        <Divider p='0' m='0' pt="20vh" color="#ebebeb"/>
        <Container pt='3vh' bg='#121212' display="flex" flex="row" minW='80vw'>
          {info.map((datas, i) => (
              <Metric key={i} name={datas.name} amount={datas.amount} />
            ))}
        </Container>
      </Container>
    );
  } else {
    return (
      <div className='home' color='#eeffff'>
        <Hide below='lg'>
          <Image onClick={() => toggleMode()} overflow='hidden' src={Lside} mr='auto' w='35vw' h='100vh' />
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
