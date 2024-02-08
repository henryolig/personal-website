import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting'
import Navvy from './Navvy';


const Hobbies = () => {


  return (
    <div>
      <Navvy></Navvy>
      <div className='pagebody'>
        <div className='greeting'>
          <h1>This is what I like to do</h1>
        </div>
      </div>
      </div>
    
  );
}

export default Hobbies;
