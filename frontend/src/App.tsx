import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting'
import { Center } from '@chakra-ui/layout';
import Navvy from './Navvy'

const App = () => {


  return (
    <div>
      <Center w="100%" h="100vh">
        <div className='greeting'>
          <Greeting></Greeting>
          <div className='senders'>
              <Link to='/hobbies'>About me</Link>
              <Link to='/work-experience'>My work</Link>
              <Link to='/blog'>Blog</Link>
          </div>
        </div>
      </Center>
    </div>
  );
}

export default App;
