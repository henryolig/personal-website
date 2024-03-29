import React, { useState } from 'react';
import './Navvy.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BlogBtn from '../images/blogbtn.png'
import WorkBtn from '../images/myworkbtn.png'
import AboutBtn from '../images/aboutmebtn.png'
import ActiveWorkBtn from '../images/activeWorkBtn.png'
import ActiveAbtBtn from '../images/activeAbtMeBtn.png'
import ActiveBlogBtn from '../images/activeBlogBtn.png'
import Olig from '../images/olig.png'
import { Image, Container, Img, Text } from '@chakra-ui/react'
import MeDrawing from '../images/icon.png'
import DNavvy from './dark/DNavvy';
import { useMode } from '../context/ModeContext';


const Navvy = () => {
  const [workimage, setWorkImage] = useState(WorkBtn);
  const [aboutimage, setAboutImage] = useState(AboutBtn);
  const [blogimage, setBlogImage] = useState(BlogBtn);

  const {mode, toggleMode} = useMode();
  const gradientCol = "linear(to-l, #DBDBDB, #404040)";

  return (
    <div className="container">
      <Container m='0' minW='100vw' display='flex' flexDir='row' justifyContent='space-around' alignContent='center'>
          <Link id='homelink' to='/'>
            <Image src={MeDrawing}
              width='5vw'
              minW='75px'
              ml='auto'
              mr='auto'
              mt='0.5vh'
              cursor='pointer'
            />
          </Link>

          <Link id='hobbylink' to='/about-me'>
            <Img src={aboutimage}
              onMouseEnter={() => setAboutImage(ActiveAbtBtn)}
              onMouseOut={() => setAboutImage(AboutBtn)}
              width='15vw'
              minW='120px'
              mt='1vh'
              cursor='pointer'
            />
          </Link>
          
          <Link id='worklink' to='/work-experience'>
            <Img src={workimage}
              onMouseEnter={() => setWorkImage(ActiveWorkBtn)}
              onMouseOut={() => setWorkImage(WorkBtn)}
              width='11.5vw'
              minW='90px'
              ml='auto'
              mr='auto'
              mt='1vh'
              cursor='pointer'
            />
          </Link>

          <Link id='bloglink' to='/blog'>
            <Img src={blogimage}
              onMouseEnter={() => setBlogImage(ActiveBlogBtn)}
              onMouseOut={() => setBlogImage(BlogBtn)}
              width='8vw'
              minW='66px'
              ml='auto'
              mr='auto'
              mt='1vh'
              cursor='pointer'
            />
          </Link>

          <Text fontSize="2vw" color={'#121212'} fontWeight="bold" onClick={() => toggleMode()}
                mr='4vw'
                cursor='pointer'
                _hover={{color:gradientCol,
                bgGradient:"linear(to-l, #404040, #CDCDCD)",
                bgClip:"text"}}>
                    Click me!</Text>
      </Container>
      <hr />
    </div>
    
  );
}

export default Navvy;


