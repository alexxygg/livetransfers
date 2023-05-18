import React, { useState } from 'react';
import './App.css'; // Import the CSS file with the updated styling

const App = () => {
  const [closers, setClosers] = useState([
    { name: 'Koren', status: false },
    { name: 'Dylan', status: false },
    { name: 'Isaak', status: false },
    { name: 'Harrison', status: false },
  ]);

  const handleStatusToggle = (index) => {
    const password = prompt('Enter the password:');
    if (password === 'pass') {
      const updatedClosers = [...closers];
      updatedClosers[index].status = !updatedClosers[index].status;
      setClosers(updatedClosers);
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
