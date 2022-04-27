// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Philosophie from './components/Philosophie';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/philosophie' element={<Philosophie />} />
      </Routes>
    </Router>
  );
};

export default App;
