// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AddEvents from './components/addEvent/AddEvents';
import GetEvents from './components/addEvent/GetEvents';
import Details from './components/addEvent/Details';
import EditEvent from './components/addEvent/EditEvent';
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
        <Route path='/getEvents' element={<GetEvents />} />
        <Route path='/getEvent/:id' element={<Details />} />
        <Route path='/editEvent/:id' element={<EditEvent />} />
      </Routes>
    </Router>
  );
};

export default App;
