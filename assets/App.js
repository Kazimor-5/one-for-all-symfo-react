// !COMPONENTS
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ContactForm from './components/contact/ContactForm';
import ContactList from './components/contact/ContactList';
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
      </Routes>
    </Router>
  );
};

export default App;
