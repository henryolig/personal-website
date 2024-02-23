import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navvy from '../components/Navvy';
import { Center, Container, Text } from '@chakra-ui/react';

const Work = () => {

  const [serious, setSeriousness] = useState(false);
  useEffect(() => {
    let d = new Date();
    let time = d.getHours();  
    if (time < 9 || time > 17) {
      setSeriousness(false);
    }
    else {
      setSeriousness(true);
    }
  }, []);


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
        <Center m='0' p='0' minW='100vw' minH='100vh' backgroundColor={'#323232'}>
          <Text color={'#FFFFFF'} fontSize={'3vw'} onClick={() => setSeriousness(false)}>I love work</Text>
        </Center>
      </div>
    );
    }
  
}

export default Work;
