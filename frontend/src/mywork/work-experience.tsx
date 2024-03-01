import React, { useState, useEffect } from 'react';
import Navvy from '../components/Navvy';
import { Center, Container, Text } from '@chakra-ui/react';
import { useMode } from '../context/ModeContext';
import WorkBar from '../components/dark/WorkBar';




const Work = () => {
  const { mode, toggleMode } = useMode();
  console.log("Truer", mode);
  if(!mode) {
    return (
      <div>
        <Navvy></Navvy>
        <Center m='0'>
          <Text fontSize='3vw' mt='10vh' 
          onClick={() => toggleMode()}
          >Click here to get so so so serious</Text>
        </Center>
      </div>
    );
  }
  else {
    return (
      <div>
        <Center m='0' p='0' minW='100vw' minH='100vh' backgroundColor={'#121212'}>
          <Text color={'#FFFFFF'} fontSize={'3vw'} 
          onClick={() => toggleMode()}
          >I love work</Text>
          <WorkBar/>
        </Center>
      </div>
    );
    }
  
}

export default Work;
