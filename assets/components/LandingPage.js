// ! COMPONENTS
import HeaderSlider from './landing page/HeaderSlider';
import HeaderFixe from './landing page/HeaderFixe';
import Mouvement from './landing page/Mouvement';
import Fonctionnement from './landing page/Fonctionnement';
import Philosophie from './landing page/Philosophie';
import Histoire from './landing page/Histoire';
import Constat from './landing page/Constat';
import Revolution from './landing page/Revolution';
import EvenementSlider from './landing page/EvenementSlider';
import Soutiens from './landing page/Soutiens';
import Reseau from './landing page/Reseau';
import Communaute from './landing page/Communaute';
import Challenge from './landing page/Challenge';
import News from './landing page/News';
import Evenement from './landing page/Evenement';
import Contact from './landing page/Contact';
import Footer from './landing page/Footer';
// ! FILES
import React from 'react';

const LandingPage = () => {
  return (
    <main className='container'>
      <HeaderSlider />
      <HeaderFixe />
      <Mouvement />
      <Fonctionnement />
      <Philosophie />
      <Histoire />
      <Constat />
      <Revolution />
      <EvenementSlider />
      <Soutiens />
      <Reseau />
      <Communaute />
      <Challenge />
      <News />
      <Evenement />
      <Contact />
      <Footer />
    </main>
  );
};

export default LandingPage;
