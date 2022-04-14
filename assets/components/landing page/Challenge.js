import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Challenge = () => {
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
    slideInTop('#challenge-title');
  }, []);

  useEffect(() => {
    slideInLeft('#challenge-img-container');
  }, []);

  useEffect(() => {
    slideInRight('#event');
  }, []);

  useEffect(() => {
    slideInRight('#challenge-text-part-1');
  }, []);

  useEffect(() => {
    slideInLeft('#challenge-text-part-2');
  }, []);

  useEffect(() => {
    slideInBottom('#challenge-btn');
  }, []);

  return (
    <section className='section-challenge'>
      <article id='challenge-title' className='challenge-title'>
        <h2 className='bold'>Challenge #JeSuisOne4All</h2>
      </article>
      <article className='challenge-content'>
        <div id='challenge-img-container' className='challenge-img-container'>
          <img
            src='./assets/je_suis_one_for_all/map.png'
            alt='carte challenge'
            className='img'
          />
          <img
            src='./assets/je_suis_one_for_all/je_suis_one4all.png'
            alt='#JeSuisOne4All'
            className='img'
          />
        </div>
        <div className='challenge-text'>
          <p id='event' className='event bold purple'>
            un évènement historique
          </p>
          <p id='challenge-text-part-1'>
            <span className='bold'>
              Le Mouvement{' '}
              <span className='one4all-font bold purple'>#One4All</span>
            </span>{' '}
            lance un appel international à la solidarité au travers de
            l'opération{' '}
            <span className='one4all-font bold purple'>#JeSuisOne4All</span>{' '}
            pour venir en aide à toutes les personnes, structures sociales,
            médicales où qu'elles se trouvent dans le monde
          </p>
          <p id='challenge-text-part-2'>
            La solidarité est un challenge. Regarder en direction des autres et
            le premier pas sur la Voie de l'ALtruisme !
          </p>
          <button id='challenge-btn' className='btn'>
            je participe
          </button>
        </div>
      </article>
    </section>
  );
};

export default Challenge;
