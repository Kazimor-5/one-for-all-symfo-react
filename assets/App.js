// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import StripeContainer from './components/StripeContainer';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/checkout' element={<StripeContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
