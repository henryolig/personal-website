import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from '../components/Greeting'
import Navvy from '../components/Navvy';
import { Text } from '@chakra-ui/react'


const Hobbies = () => {


  return (
    <div>
      <Navvy></Navvy>
      <div className='pagebody'>
        <div className='greeting'>
          <Text fontSize='9xl'>:3</Text>
        </div>
      </div>
      </div>
    
  );
}

export default Hobbies;
