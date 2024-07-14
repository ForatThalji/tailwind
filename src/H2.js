import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';




function H2() {
  const navigate = useNavigate();
    const goToPage = () => {
        navigate('/Home');
      };
    
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
          <li>
          <Link to="/logout"> <button onClick={goToPage()}>logout</button></Link>
         
         </li>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default H2;

