// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
// ! FILES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ModeFonctionnement from './components/ModeFoctionnement';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/modeFonctionnement' element={<ModeFonctionnement />} />
      </Routes>
    </Router>
  );
};

export default App;
