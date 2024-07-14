import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { databaseURL } from './firebaseConfig'; // استيراد قاعدة بيانات Firebase URL
import './App.css'; // استيراد أنماط CSS
import { useLocation, useNavigate } from 'react-router-dom';

function Update() {

  const location = useLocation();
  const navigate = useNavigate();

  
  const [updateId, setUpdateId] = useState(location.state?.id || "");
  const [updateFname, setUpdateFname] = useState("");
  const [updateFdefi, setUpdateFdefi] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (updateId) {
        try {
          const response = await axios.get(`${databaseURL}/books/book/${updateId}.json`);
          if (response.data) {
            setUpdateFname(response.data.fname);
            setUpdateFdefi(response.data.fdefi);
          }
        } catch (error) {
          alert(`Error: ${error.message}`);
        }
      }
    };

    fetchData();
  }, [updateId]);

  const updateData = async () => {
    if (updateFname && updateFdefi) {
      try {
        const updatedItem = {
          fname: updateFname,
          fdefi: updateFdefi
        };
        await axios.put(`${databaseURL}/books/book/${updateId}.json`, updatedItem);
        alert("Data updated successfully");
        navigate('/Home'); // إعادة التوجيه إلى صفحة Read بعد التحديث
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    } else {
      alert("Please provide all fields for update");
    }
  };

  return (
    <div className="update-container">
      <h3>Update Data</h3>
      <input
        type='text'
        placeholder='Name'
        value={updateFname}
        onChange={(e) => setUpdateFname(e.target.value)}
      />
      <input
        type='text'
        placeholder='Definition'
        value={updateFdefi}
        onChange={(e) => setUpdateFdefi(e.target.value)}
      />
      <button onClick={updateData}>Update Data</button>
    </div>
  );
}

export default Update;
