import React from 'react';
import logo from './logo.svg';
import './Greeting.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import NameImg from '../images/myname.png'

const App = () => {
    return(
        <div className='GreetContainer'>
            <h4>Hello, my name is</h4>
            <img className='name' src={NameImg} alt='Henry Olig'/>
            <h4>CS [AT] UNIVERSITY OF MINNESOTA</h4>
            <h4>HENRY [AT] OLIG [DOT] DEV</h4>
            
        </div>
    );
}

export default App;