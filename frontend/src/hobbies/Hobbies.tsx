import React from 'react';
import Navvy from '../components/Navvy';
import { Container, Text, Divider } from '@chakra-ui/react'
import Reviews from './Reviews'
import 'react-slideshow-image/dist/styles.css'
import { useMode } from '../context/ModeContext';
import DNavvy from '../components/dark/DNavvy';


const Hobbies = () => {
  const { mode, toggleMode } = useMode();
  if(!mode) {
    return (
      <Container p='0' m='0' minW='100vw' h='100vh' bg='#121212'>
        <DNavvy/>
        <Container bgColor="#121212" p='0' pt='3vw' m='0' pl='5vw' minW='90vw'>
          <Text color="#ebebeb" fontWeight='Bold' fontSize="3vw" onClick={() => toggleMode()}>About me</Text>
          <Text color="#ebebeb" pt='2vh' w='40vw' fontSize="1.25vw">
          Hello. I'm Henry, a Software Engineer based in Minneapolis. 
          I'm passionate about creating change through software.
          I thrive in environments that challenge me, value creativity, and foster a culture of 
          collaboration and respect. <br/><br/> My goal is to [a broad professional or personal goal].
          When I'm not [a general activity related to your interests or hobbies,
           e.g., "exploring the great outdoors,"], you can find me 
           [another activity or hobby, e.g., "practicing mindfulness and yoga," ].
           <br/><br/>
           I believe that [a personal philosophy or concluding statement, e.g., 
          "life is a continuous journey of learning and growth,"].
          Thank you for taking the time to get to know a bit about me. 
          I'm always eager to connect, collaborate, and share ideas, so feel free to reach out through 
          [preferred contact method] or follow me on [social media platforms].
          </Text>
        </Container>
      </Container>
    )
  }
  else{
    return (
      <div>
        <Navvy></Navvy>
        <Container minW='100vw' margin='0' padding='0' display='flex' flexDir='row' justifyContent={'space-between'} >
          <Container minW='45vw' m='0' ml='2vw'>
            <Text fontSize='9xl'>Welcome to my little internet corner</Text>
            <Text fontSize='7xl' mb='2vh'>
              I am known as the 
              Socrates of our generation, except I don't know philosophy, but I know computers. 
              Don't ask who calls me this, though, please just trust that many people are saying this. <br/>
            </Text>
            <hr/>
            <Text mt='3vh' fontSize='8xl'>What I do 🙀</Text>
            <Text fontSize='6xl'>
              I'm a B.S Computer Science student at the University of Minnesota with an interest in 
              Quantum Computing and Operating Systems, with an intention to begin and continue
              research in these subjects beyond my collegiate years.
              <br/><br/>
              Outside of school, I am an avid sweater collector, and my pants cost me way too much.
              I like playing Dungeons & Dragons and have been playing with my group for about 5 years.
              My entire wallet has been emptied on Warhammer 40k miniatures and paint :((
              
            </Text>
            {/* <Slideshow></Slideshow> */}
          </Container>
          <Reviews></Reviews>
        </Container>
      </div>
    );
  }
}

export default Hobbies;
