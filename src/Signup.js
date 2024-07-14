import React, { useState, useEffect } from "react";
import Header from './Header.js';
import H2 from './H2.js';
import { useNavigate } from 'react-router-dom';


function Signup() {


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already registered (e.g., data stored in localStorage)
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName);
      setIsRegistered(true);
    }
  }, []);

  const goToPage = () => {
    navigate('/Home');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted:\n' + 
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Message: ' + message);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
    setIsRegistered(true);
  };

  const handleLogout = () => {
    
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('message');
    setName('');
    setEmail('');
    setMessage('');
    setIsRegistered(false);
    goToPage();
  };

  return (
    <div>
    
      {isRegistered ? (
        <div>
         <H2 />
          <h2>Welcome, {name}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        

        <form onSubmit={handleSubmit}>
          
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
            />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      )}
    </div>
  );
}

export default Signup;
