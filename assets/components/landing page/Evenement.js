// ! COMPONENTS
import EvenementSlider from './EvenementSlider';
// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Evenement = () => {
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
    slideInTop('#experience');
  }, []);

  useEffect(() => {
    slideInTop('#evenement-title');
  }, []);

  useEffect(() => {
    slideInLeft('#evenement-text-part-1');
  }, []);

  useEffect(() => {
    slideInRight('#evenement-text-part-2');
  }, []);

  useEffect(() => {
    slideInTop('#evenement-img-container');
  }, []);

  useEffect(() => {
    slideInBottom('#evenement-btn');
  }, []);

  return (
    <section className='section-evenement'>
      <article className='evenement-title'>
        <p id='experience' className='bold purple'>
          experience more
        </p>
        <h2 id='evenement-title' className='bold'>
          nos ??v??nements, une exp??rience altruiste
        </h2>
      </article>
      <article className='evenement-content'>
        <p id='evenement-text-part-1'>
          <span className='one4all-font purple'>#One4All</span> se veut ??tre un
          mouvement f??d??rateur ?? fort potentiel de communication
        </p>
        <p id='evenement-text-part-2'>
          Pour r??ussir ?? porter notre message, mener nos actions et f??d??rer dans
          chaque pays, r??gions ou ville du monde, nous misons sur diff??rents
          types d'??v??nements... Venez les d??couvrir !
        </p>
        <div id='evenement-img-container' className='evenement-img-container'>
          <img
            src='./assets/evenement/Slide-events.png'
            alt='??v??nements #One4All'
            className='img'
          />
        </div>
        <button id='evenement-btn' className='btn'>
          nos ??v??nements
        </button>
      </article>
      <EvenementSlider />
    </section>
  );
};

export default Evenement;
