import React, { useState } from 'react';
import './Greeting.css';
import { Link } from 'react-router-dom';
import { Image, Container, Center } from '@chakra-ui/react'
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

const App = () => {
    const [workimage, setWorkImage] = useState(WorkBtn);
    const [aboutimage, setAboutImage] = useState(AboutBtn);
    const [blogimage, setBlogImage] = useState(BlogBtn);
    return(
        <Center ml='auto' mr='auto' minW='400px' justifyContent='space-between' h='100vh' w="25vw" rounded='md' pt='0' mt='0'>
            <div className='greeting'>
                <Image minW='175px' w='15vw' src={Top} ml='auto' mr='auto' />
                    <Container justifyContent='center' m='0' minW='25vw' color='#eefff' className='GreetContainer' p='0'>
                    <Image minW='150px' maxW='700px' w='20vw' src={MeDrawing} ml='auto' mr='auto' />
                        {/* <h4>Hello, my name is</h4> */}
                        <Image minW='275px' mb='5vh' className='name' src={NameImg} alt='Henry Olig'></Image>
                        {/* <h4>CS [AT] UNIVERSITY OF MINNESOTA</h4>
                        <h4>HENRY [AT] OLIG [DOT] DEV</h4> */}
                        <div className='senders'>
                            <Link id='homehobbylink' to='/about-me'>
                            <Image src={aboutimage}
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
                            <Image src={workimage}
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
                            <Image src={blogimage}
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
                <Image mt='10vh' minW='250px' w='22vw' src={Bottom} ml='auto' mr='auto'/>
            </div>
        </Center>
    );
}

export default App;