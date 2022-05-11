// ! COMPONENTS
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
import Faq from './components/Faq';
import NotreRevolution from './components/revolution/NotreRevolution';
import Evenement from './components/Evenement';
import Mission from './components/Mission';
import ModeFonctionnement from './components/ModeFonctionnement';
import NosActivitesCommerciales from './components/NosActivitesCommerciales';
import Rejoindre from './components/Rejoindre';
import Login from './components/login/Login';
import Register from './components/register/Register';
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
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/contactList' element={<ContactList />} />
        <Route path='/addEvent' element={<AddEvents />} />
        <Route path='/getEvents' element={<GetEvents />} />
        <Route path='/getEvent/:id' element={<Details />} />
        <Route path='/editEvent/:id' element={<EditEvent />} />
        <Route path='/soutiens' element={<Soutiens />} />
        <Route path='/philosophie' element={<Philosophie />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/revolution' element={<NotreRevolution />} />
        <Route path='/evenements' element={<Evenement />} />
        <Route path='/missions' element={<Mission />} />
        <Route path='/modeFonctionnement' element={<ModeFonctionnement />} />
        <Route path='/activites' element={<NosActivitesCommerciales />} />
        <Route path='/rejoindre' element={<Rejoindre />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} /> */}
        <Route path='/register' element={<Register />} />
        {/* <Route path="/register" element={user ? <Navigate to="/" replace /> : <Register />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
