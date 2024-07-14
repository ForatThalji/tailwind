import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { databaseURL } from './firebaseConfig';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

function Read() {
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

  const handleUpdate = (id) => {
    navigate('/update', { state: { id } });
  };

  const goToPage = () => {
    navigate('/write');
  };

  const handleSoftDelete = async (id) => {
    try {
      await axios.patch(`${databaseURL}/books/book/${id}.json`, { isDeleted: true });
      fetchData();
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="read-container">
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 py-8 bg-green-100">
        {farray.map((item) => (
          <div key={item.id} className="bg-white rounded shadow-md p-4 ">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{item.fname}</h3>
            <p className="text-gray-600">{item.fdefi}</p>
            <div className="flex mt-4 space-x-2 ">
              <button className="bg-yellow-300 hover:bg-yellow-500 text-white px-4 py-2 rounded focus:outline-none" onClick={() => handleUpdate(item.id)}>Update</button>
              <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded focus:outline-none" onClick={() => handleSoftDelete(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded focus:outline-none mt-4" onClick={goToPage}>Add</button>
    </div>
  );
}

export default Read;
