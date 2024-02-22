import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navvy from '../components/Navvy';
import { Center, Container, Text } from '@chakra-ui/react';

const Work = () => {
  const [serious, setSeriousness] = useState(false);

  if (serious == false) {
    return (
      <div>
        <Navvy></Navvy>
        <Center m='0'>
          <Text fontSize='3vw' mt='10vh' onClick={() => setSeriousness(true)}>Click here to get so so so serious</Text>
        </Center>
      </div>
    );
  }
  else {
    return (
      <div>
        <Container m='0' p='0' minW='100vw' minH='100vh' backgroundColor={'#323232'}></Container>
      </div>
    );
    }
  
}

export default Work;
