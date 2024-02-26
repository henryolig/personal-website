import React, { useState, useEffect } from 'react';
import Navvy from '../components/Navvy';
import { Center, Container, Text } from '@chakra-ui/react';
import GetTime from '../components/getTime';




const Work = () => {
  const [serious, setSeriousness] = useState(!GetTime());

  if (serious == false) {
    return (
      <div>
        <Navvy></Navvy>
        <Center m='0'>
          <Text fontSize='3vw' mt='10vh' 
          onClick={() => setSeriousness(true)}
          >Click here to get so so so serious</Text>
        </Center>
      </div>
    );
  }
  else {
    return (
      <div>
        <Center m='0' p='0' minW='100vw' minH='100vh' backgroundColor={'#323232'}>
          <Text color={'#FFFFFF'} fontSize={'3vw'} 
          onClick={() => setSeriousness(false)}
          >I love work</Text>
        </Center>
      </div>
    );
    }
  
}

export default Work;
