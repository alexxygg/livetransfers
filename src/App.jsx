import React, { useState } from 'react';
import './App.css'; // Import the CSS file with the updated styling

const App = () => {
  const [closers, setClosers] = useState([
    { name: 'Dylan', status: true },
    { name: 'Harrison', status: false },
    { name: 'Isaak', status: true },
    { name: 'Koren', status: false },
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

  return (<><div className='title'>Live Transfers</div>
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
    </>  );
};

export default App;
