// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  //test pour savoir si un utilisateur est loggé
  /* const user = true */
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} /> */}
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
