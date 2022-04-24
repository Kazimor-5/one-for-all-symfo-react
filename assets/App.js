// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PageNotreRevolution from './components/PageNotreRevolution';
// ! FILES

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/revolution' element={<PageNotreRevolution /> } />
      </Routes>
    </Router>
  );
};

export default App;
