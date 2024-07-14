import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { databaseURL } from './firebaseConfig';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Ret() {
  const [farray, setFarray] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(`${databaseURL}/books/book.json`);
      if (response.data) {
        setFarray(Object.entries(response.data).map(([id, data]) => ({ id, ...data })).filter(item => !item.isDeleted));
      } else {
        setFarray([]);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="read-container ">
      <Header />
      <div className="  px-4 sm:px-6 lg:px-8 py-8 bg-green-100 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {farray.map((item) => (
            <div key={item.id} className="bg-white rounded shadomd p-4 m-20  h-40">
              <h3 className="text-lg mt-10 font-bold text-gray-800 mb-w-2">{item.fname}</h3>
              <p className="text-gray-600">{item.fdefi}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ret;
