// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
