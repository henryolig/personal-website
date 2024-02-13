import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Navvy from '../components/Navvy';
import './Blog.css';
import { Container, Text } from '@chakra-ui/layout';

const Blog = () => {

  return (
    <div>
        <Navvy></Navvy>
        <Container ml="3vw" mt='4vh' w="50vw">
          <Text fontSize='9xl'>My Blog :3</Text>
        </Container>
    </div>
  );
}

export default Blog;
