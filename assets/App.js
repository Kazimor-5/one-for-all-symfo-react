// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ContactForm from './components/contact/ContactForm';
import ContactList from './components/contact/ContactList';
import AddEvents from './components/addEvent/AddEvents';
import GetEvents from './components/addEvent/GetEvents';
import Details from './components/addEvent/Details';
import EditEvent from './components/addEvent/EditEvent';
import Soutiens from './components/Soutiens';
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
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/contactList' element={<ContactList />} />
        <Route path='/addEvent' element={<AddEvents />} />
        <Route path='/getEvents' element={<GetEvents />} />
        <Route path='/getEvent/:id' element={<Details />} />
        <Route path='/editEvent/:id' element={<EditEvent />} />
        <Route path='/soutiens' element={<Soutiens />} />
        <Route path='/philosophie' element={<Philosophie />} />
      </Routes>
    </Router>
  );
};

export default App;
