import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import Work from './mywork/work-experience'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hobbies from './hobbies/Hobbies'
import Blog from './blog/Blog'
import E404 from './e404'
import GetTime from './components/getTime';
import {ModeProvider} from './context/ModeContext'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ModeProvider>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/work-experience" element={<Work/>} />
            <Route path="/about-me" element={<Hobbies/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="*" element={<E404/>} />
          </Routes>
        </Router>
      </ChakraProvider>
    </ModeProvider>
  </React.StrictMode>
);