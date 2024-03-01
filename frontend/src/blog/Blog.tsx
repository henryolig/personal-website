import React, { useState } from 'react';
import Navvy from '../components/Navvy';
import './Blog.css';
import { Container, Text } from '@chakra-ui/layout';
import { useMode } from '../context/ModeContext';

const Blog = () => {
  const {mode, toggleMode} = useMode();
  if (!mode) {
    return (
      <div>
        <Navvy></Navvy>
        <Container ml="3vw" mt='4vh' w="50vw" bg='#000000'>
          <Text fontSize='9xl'>My Blog :)</Text>
        </Container>
      </div>
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
