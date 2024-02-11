import React from 'react';
import './Navvy.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Greeting from '../components/Greeting'


const Navvy = () => {


  return (
    <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work-experience">Work Experience</Link>
            </li>
            <li>
              <Link to="/side-projects">Side Projects</Link>
            </li>
            <li>
              <Link to="/hobbies">Hobbies</Link>
            </li>
          </ul>
        </nav>

        <hr />
      </div>
    
  );
}

export default Navvy;


