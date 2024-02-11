import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import Work from './mywork/work-experience'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hobbies from './hobbies/Hobbies'
import Navvy from './navvy/Navvy';
import Blog from './blog/Blog'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/work-experience" element={<Work/>} />
          <Route path="/hobbies" element={<Hobbies/>} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
