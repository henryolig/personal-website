import React, { useState } from 'react';
import Navvy from '../components/Navvy';
import './Blog.css';
import { Container, Text } from '@chakra-ui/layout';
import { useMode } from '../context/ModeContext';
import DNavvy from '../components/dark/DNavvy';

const Blog = () => {
  const {mode, toggleMode} = useMode();
  if (!mode) {
    return (
      <Container m='0' p='0' bg='#121212' minW='100vw' h='100vh'>
        <DNavvy></DNavvy>
        <Container ml="3vw" mt='4vh' w="50vw" bg='#121212'>
          <Text fontSize='9xl' color='#ebebeb'>My Blog :)</Text>
        </Container>
      </Container>
    );
  }
  else {
    return (
      <div>
        <Navvy></Navvy>
        <Container ml="3vw" mt='4vh' w="50vw">
          <Text fontSize='9xl'>My Blog :3</Text>
        </Container>
      </div>
    );
  }
  
}

export default Blog;
