import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';

function H2() {
  return (
    <div>
<nav className="topnav">
      <ul>
       
        <li>
        
          <Link to="/Home">Home</Link>
         
        </li>
        
        <li>
          <Link to="/About">About</Link>
        </li>

        <li>
          <Link to="/Catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>

        <li>
          <Link to="/logout"> <button onClick="handleChange()">logout</button></Link>
         
         </li>
      </ul>
    </nav>

  
    </div>
    
  );
}

export default H2;
