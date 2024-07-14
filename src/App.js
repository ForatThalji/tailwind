import React from 'react';
import './App.css';
import Write from './write';
import Read from './Read';
import Update from './Update';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Ret from './Ret';
import Catalog from './Catalog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
     
        <Route path="/" element={<Ret />} />
        <Route path="/Ret" element={<Ret />} />
        <Route path="/write" element={<Write />} />
        <Route path="/read" element={<Read />} />
        <Route path="/about" element={<About />} />
        <Route path="/Home" element={<Ret />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/update" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;

