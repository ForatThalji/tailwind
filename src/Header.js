import React from 'react';
import { Link } from 'react-router-dom';
import Signup from './Signup';

function Header() {
  return (
    <div>
      <nav className="bg-green-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/Home" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/About" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/Catalog" className="text-white hover:text-gray-300">Catalog</Link>
          </li>
          <li>
            <Link to="/Contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
          
          <li>
            <Link to="/Signup">
             <button className="signupbtn bg-yellow-300 text-gray px-4 py-2 rounded hover:bg-yellow-500">Sign up</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
