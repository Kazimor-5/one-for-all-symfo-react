// ! COMPONENTS
import HeaderSlider from './landing page/HeaderSlider';
import HeaderFixe from './landing page/HeaderFixe';
import Mouvement from './landing page/Mouvement';
import Fonctionnement from './landing page/Fonctionnement';
import Philosophie from './landing page/Philosophie';
import Histoire from './landing page/Histoire';
// ! FILES
import React from 'react';
import '../styles/normalize.css';
import '../styles/index.css';

const LandingPage = () => {
  return (
    <main className='container'>
      <HeaderSlider />
      <HeaderFixe />
      <Mouvement />
      <Fonctionnement />
      <Philosophie />
      <Histoire />
    </main>
  );
};

export default LandingPage;
