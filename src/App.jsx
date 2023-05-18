import React, { useState, useEffect } from 'react';
import './App.css';
import closersData from './closers.json'; // Import the closers data

const App = () => {
  const [closers, setClosers] = useState([]);

  useEffect(() => {
    setClosers(closersData.closers);
  }, []);

  const handleStatusToggle = (index) => {
    const password = prompt('Enter the password:');
    if (password === 'pass') {
      const updatedClosers = [...closers];
      updatedClosers[index].status = !updatedClosers[index].status;
      setClosers(updatedClosers);
      // Save the updated closers back to the configuration file
      closersData.closers = updatedClosers;
    } else {
      alert('Incorrect password. Status not changed.');
    }
  };

  return (
    <div className="closers-container">
      {closers.map((closer, index) => (
        <div
          key={index}
          className={`closer ${closer.status ? 'green' : 'red'}`}
          onClick={() => handleStatusToggle(index)}
        >
          {closer.name}
        </div>
      ))}
    </div>
  );
};

export default App;
