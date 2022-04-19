// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AddEvents from './components/addEvent/AddEvents';
// ! FILES
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/addEvent' element={<AddEvents />} />
      </Routes>
    </Router>
  );
};

export default App;
