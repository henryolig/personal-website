import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting'
import { Center } from '@chakra-ui/layout';
import { Image, Container, Button } from '@chakra-ui/react'
import Navvy from './components/Navvy'
import BlogBtn from './images/blogbtn.png'
import WorkBtn from './images/myworkbtn.png'
import AboutBtn from './images/aboutmebtn.png'
import Work from './mywork/work-experience';
import ActiveWorkBtn from './images/activeWorkBtn.png'
import ActiveAbtBtn from './images/activeAbtMeBtn.png'
import ActiveBlogBtn from './images/activeBlogBtn.png'
import Sides from './images/sides.png'
import Rside from './images/right.png'
import Lside from './images/left.png'

const App = () => {

  const [workimage, setWorkImage] = useState(WorkBtn);
  const [aboutimage, setAboutImage] = useState(AboutBtn);
  const [blogimage, setBlogImage] = useState(BlogBtn);


  return (
    <div className='home' color='#eeffff'>
      <Image src={Lside} mr='auto' w='35vw' h='100vh' />
      <Center w="25vw" rounded='md' mt='5vh'>
        <div className='greeting'>
          <Greeting></Greeting>
          <div className='senders'>
            <Link to='/hobbies'>
              <Image src={aboutimage}
                onMouseEnter={() => setAboutImage(ActiveAbtBtn)}
                onMouseOut={() => setAboutImage(AboutBtn)}
                width='20vw'
                ml='auto'
                mr='auto'
                cursor='pointer'
              />
            </Link>
            <Link to='/work-experience'>
              <Image src={workimage}
                onMouseEnter={() => setWorkImage(ActiveWorkBtn)}
                onMouseOut={() => setWorkImage(WorkBtn)}
                width='16vw'
                ml='auto'
                mr='auto'
                mt='1vh'
                cursor='pointer'
              />
            </Link>
            <Link to='/blog'>
              <Image src={blogimage}
                onMouseEnter={() => setBlogImage(ActiveBlogBtn)}
                onMouseOut={() => setBlogImage(BlogBtn)}
                width='10vw'
                ml='auto'
                mr='auto'
                mt='1vh'
                cursor='pointer'
              />
            </Link>
          </div>
        </div>
      </Center>
      <Image src={Rside} ml='auto' w='35vw' h='100vh' />
    </div>
  );
}

export default App;
