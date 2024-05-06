import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import InstanceList from './components/InstanceList';
import AddInstance from './components/AddInstance';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<InstanceList />} />
        <Route path="/add-instance" element={<AddInstance />} />
      </Routes>
    </Router>
  );
};

export default App;
