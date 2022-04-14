// ! COMPONENTS
import SoutiensSlider from './SoutiensSlider';
// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Soutiens = () => {
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
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInBottom = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInTop('#soutiens-title');
  }, []);

  useEffect(() => {
    slideInRight('#ligue-img-container');
  }, []);

  useEffect(() => {
    slideInLeft('#soutiens-text');
  }, []);

  useEffect(() => {
    slideInBottom('#soutiens-btn');
  }, []);

  return (
    <section className='section-soutiens'>
      <article className='top'>
        <h2 id='soutiens-title' className='soutiens-title bold'>
          nos soutiens
        </h2>
        <SoutiensSlider />
      </article>
      <article className='bottom'>
        <div id='ligue-img-container' className='ligue-img-container'>
          <img
            src='./assets/ligue/logo-ligue-LHA-300x300.png'
            alt='logo ligue'
            className='img'
          />
        </div>
        <div id='soutiens-text' className='soutiens-text'>
          <p>
            Le Mouvement{' '}
            <span className='one4all-font purple bold'>#One4All</span> suscite
            l'intérêt de nombreuses personnalités et influenceurs qui voient en
            notre organisation, un système alternatif et un modèle fiable,
            susceptible de permettre des avancées significatives à{' '}
            <span className='purple bold'>l'échelle planétaire</span>
          </p>
        </div>
        <button id='soutiens-btn' className='btn'>
          nos soutiens
        </button>
      </article>
    </section>
  );
};

export default Soutiens;
