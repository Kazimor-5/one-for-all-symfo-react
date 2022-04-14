import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Fonctionnement = () => {
  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
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
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
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
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
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
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom',
        },
      }
    );
  };

  useEffect(() => {
    slideInTop('#banner-container');
  }, []);

  useEffect(() => {
    slideInLeft('#fonctionnement-content');
  }, []);

  useEffect(() => {
    slideInRight('#fonctionnement-img-container');
  }, []);

  return (
    <section className='section-fonctionnement'>
      <article id='banner-container' className='banner-img-container'>
        <img
          src='./assets/fonctionnement/modele-economique.png'
          alt='bannière fonctionnement'
          className='img'
        />
      </article>
      <article className='fonctionnement'>
        <div id='fonctionnement-content' className='fonctionnement-content'>
          <h3 className='bold'>l'autofinancement comme modèle</h3>
          <p className='fonctionnement-text bold'>
            Pour financer ses actions{' '}
            <span className='one4all-font purple'>#One4All</span> a opté pour un
            système inexploité par d'autres associations
          </p>
          <button className='btn'>activités</button>
        </div>
        <div
          id='fonctionnement-img-container'
          className='fonctionnement-img-container'
        >
          <img
            src='./assets/fonctionnement/mode_de_fonctionnement.png'
            alt='mode de fonctionnement'
            className='img'
          />
        </div>
      </article>
    </section>
  );
};

export default Fonctionnement;
