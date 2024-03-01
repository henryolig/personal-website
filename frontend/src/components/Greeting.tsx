import React, { useState } from 'react';
import './Greeting.css';
import { Link } from 'react-router-dom';
import { Image, Container, Center, Img } from '@chakra-ui/react'
import NameImg from '../images/myname.png'
import BlogBtn from '../images/blogbtn.png'
import WorkBtn from '../images/myworkbtn.png'
import AboutBtn from '../images/aboutmebtn.png'
import ActiveWorkBtn from '../images/activeWorkBtn.png'
import ActiveAbtBtn from '../images/activeAbtMeBtn.png'
import ActiveBlogBtn from '../images/activeBlogBtn.png'
import Top from '../images/top.png'
import MeDrawing from '../images/medrawing1.png'
import Bottom from '../images/bottom.png'

const Greeting = () => {
    const [workimage, setWorkImage] = useState(WorkBtn);
    const [aboutimage, setAboutImage] = useState(AboutBtn);
    const [blogimage, setBlogImage] = useState(BlogBtn);
    return(
        <Center zIndex={1} overflow='hidden' ml='auto' mr='auto' minW='400px' justifyContent='space-between' h='100dvh' w="25vw" rounded='md' pt='0' mt='0'>
            <div className='greeting'>
                <Image minW='175px' w='15vw' src={Top} ml='auto' mr='auto' />
                <Container justifyContent='center' m='0' minW='25vw' color='#eefff' className='GreetContainer' p='0'>
                    <Image minW='150px' maxW='700px' w='20vw' src={MeDrawing} ml='auto' mr='auto'/>
                    <Image minW='275px' mb='5vh' className='name' src={NameImg} alt='Henry Olig'/>
                    <div className='senders'>
                        <Link id='homehobbylink' to='/about-me'>
                        <Img src={aboutimage}
                            onMouseEnter={() => setAboutImage(ActiveAbtBtn)}
                            onMouseOut={() => setAboutImage(AboutBtn)}
                            width='20vw'
                            minW='250px'
                            ml='auto'
                            mr='auto'
                            cursor='pointer'
                        />
                        </Link>
                        <Link id='homeworklink' to='/work-experience'>
                        <Img src={workimage}
                            onMouseEnter={() => setWorkImage(ActiveWorkBtn)}
                            onMouseOut={() => setWorkImage(WorkBtn)}
                            width='16vw'
                            minW='195px'
                            ml='auto'
                            mr='auto'
                            mt='1vh'
                            cursor='pointer'
                        />
                        </Link>
                        <Link id='homebloglink' to='/blog'>
                        <Img src={blogimage}
                            onMouseEnter={() => setBlogImage(ActiveBlogBtn)}
                            onMouseOut={() => setBlogImage(BlogBtn)}
                            width='10.5vw'
                            minW='125px'
                            ml='auto'
                            mr='auto'
                            mt='1vh'
                            cursor='pointer'
                        />
                        </Link>
                    </div>
                </Container>
                <Image mt='5vh' minW='250px' w='22vw' src={Bottom} ml='auto' mr='auto'/>
            </div>
        </Center>
    );
}

export default Greeting;