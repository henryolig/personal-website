import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Text, Divider } from '@chakra-ui/react';
// import './DNavvy.css'

const gradientCol = "linear(to-l, #7928CA, #FF0080)";
const baseColor = "#ebebeb";

interface NavLink {
    location: string,
    text: string
};
const LinkEle = ({ location, text }: NavLink) => {
    return(
    <Link to={location}>
    <Text fontSize="2vw" color={baseColor} fontWeight="bold"
    _hover={{color:gradientCol,
    bgGradient:"linear(to-l, pink.300, purple.500)",
    bgClip:"text"}}>
        {text}</Text>
    </Link>
    );
};
const links: NavLink[] = [
    {
        location: "/",
        text: "Home"
    },
    {
        location: "/about-me",
        text: "About Me"
    },
    {
        location: "/work-experience",
        text: "Work"
    },
    {
        location: "/blog",
        text: "Blog"
    }
];

const DNavvy = () => {
  return (
    <Container m='0' p='0' minW='100vw' display="flex" flexDir={"column"}>
        <Container justifyContent='space-around' alignContent='center'
        minW='100vw' bgColor="#121212" display='flex' flexDir='row'
        pb='1vh' pt='1vh'>
        
            {links.map((NavLink, i) => (
                <LinkEle key={i} location={NavLink.location} text={NavLink.text} />
            ))}
        </Container>
        <Divider p='0' m='0' color="#ebebeb"/>
    </Container>
      
    
  );
}

export default DNavvy;


