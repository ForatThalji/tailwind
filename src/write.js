import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import { databaseURL } from './firebaseConfig'; // استيراد عنوان URL لقاعدة البيانات
import { useNavigate } from 'react-router-dom';
import './App.css';
function Write() {
  
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");


  const navigate = useNavigate();

  const goToPage = () => {
    navigate('/Home');
  };


  const saveData = async () => {
    try {
      const newDoc = {
        fname: input1,
        fdefi: input2,
        isDeleted: false // إضافة حقل isDeleted بشكل افتراضي
      };
      const response = await axios.post(`${databaseURL}/books/book.json`, newDoc);
      if (response.status === 200) {
        alert("Data saved successfully");
        goToPage();
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <input
        type='text'
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type='text'
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={saveData}>Save Data</button>
     
    </div>
  );
}

export default Write;
