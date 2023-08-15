import React, { useState } from 'react';
import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const [currentForm, setCurrentForm] = useState('Login'); // Fix destructuring

  const toggleForm = (formName) => {
    setCurrentForm(formName); // Fix typo (setcurentForm -> setCurrentForm)
  };

  return (
    <div className="App">
      {currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} {/* Pass onFormSwitch prop to Register component */}
    </div>
  );
}

export default App;
