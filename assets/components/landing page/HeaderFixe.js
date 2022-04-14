// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeaderFixe = () => {
  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        scrollTrigger: {
          trigger: elem,
          start: 'top center',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInRight('#logo-fleur');
  }, []);

  useEffect(() => {
    slideInRight('#text-container');
  }, []);

  return (
    <section className='header-fixe'>
      <article className='background'>
        <img
          src='./assets/header/logocolor.png'
          alt='logo-fleur'
          id='logo-fleur'
          className='img logo-fleur'
        />
        <div id='text-container' className='text-container '>
          <img
            src='./assets/header/logo.png'
            alt='logo'
            className='img main-logo'
          />
          <img
            src='./assets/header/logoTextNoir.png'
            alt='texte'
            className='img text-noir'
          />
        </div>
      </article>
    </section>
  );
};

export default HeaderFixe;
