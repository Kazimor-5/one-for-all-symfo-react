// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reseau = () => {
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
    slideInTop('#reseau-title');
  }, []);

  useEffect(() => {
    slideInRight('#earth-container');
  }, []);

  useEffect(() => {
    slideInLeft('#reseau-text');
  }, []);

  useEffect(() => {
    slideInLeft('#increase');
  }, []);

  useEffect(() => {
    slideInTop('#compteur');
  }, []);

  useEffect(() => {
    slideInBottom('#btn-blue');
  }, []);

  return (
    <section className='section-reseau'>
      <article id='reseau-title' className='reseau-title'>
        <img
          src='./assets/reseau/reseau-700x211.png'
          alt='titre notre r??seau'
          className='img'
        />
      </article>
      <article className='reseau-content'>
        <div id='earth-container' className='earth-container'>
          <img src='assets/reseau/planet.png' alt='pan??te' className='img' />
        </div>
        <div className='reseau-text'>
          <p id='reseau-text'>
            <span className='one4all-font purple bold'>#One4All</span> ?? pour
            objectif de{' '}
            <span className='purple bold'>s'implanter dans 165 pays</span> afin
            de d??velopper le syst??me Altruiste ?? l'??chelle plan??taire
          </p>
          <p id='increase' className='increase'>
            <span className='one4all-font purple bold'>#One4All</span> dans le
            monde c'est:
          </p>
          <article id='compteur' className='compteur'>
            {/* losange container */}
            <div className='container-losange'>
              {/* 1er losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>850</h4>
                  <p>Adh??rents</p>
                </div>
              </div>
              {/* fin 1er */}
              {/* 2??me losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>135</h4>
                  <p>Comit??s locaux</p>
                </div>
              </div>
              {/* fin 2??me */}
              {/* 3??me losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>165</h4>
                  <p>Pays implant??s</p>
                </div>
              </div>
              {/* fin 3??me */}
            </div>
            {/* fin losange container */}
          </article>
          <button id='btn-blue' className='btn blue'>
            adh??rer / rejoindre
          </button>
        </div>
      </article>
    </section>
  );
};

export default Reseau;
