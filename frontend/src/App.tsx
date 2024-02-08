import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting'
import Navvy from './Navvy'

const App = () => {


  return (
    <div>
      <Navvy></Navvy>
      <div className='pagebody'>
        <div className='greeting'>
          <Greeting></Greeting>
        </div>
      </div>
    </div>
  );
}

export default App;
