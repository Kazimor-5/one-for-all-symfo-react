import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Histoire = () => {
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
    slideInTop('#histoire-title-container');
  }, []);

  useEffect(() => {
    slideInLeft('#samurai-img-container');
  }, []);

  useEffect(() => {
    slideInRight('#samurai-text');
  }, []);

  useEffect(() => {
    slideInTop('#hope-img-container');
  }, []);

  useEffect(() => {
    slideInLeft('#hope-text');
  }, []);

  useEffect(() => {
    slideInBottom('#soleil-img-container');
  }, []);

  useEffect(() => {
    slideInRight('#histoire-text');
  }, []);

  useEffect(() => {
    slideInBottom('#red');
  }, []);

  return (
    <section className='section-histoire'>
      <article
        id='histoire-title-container'
        className='histoire-title-container'
      >
        <img
          src='./assets/histoire/titre.png'
          alt='histoire du mouvement'
          className='img'
        />
      </article>
      <article className='samurai-container'>
        <div id='samurai-img-container' className='samurai-img-container'>
          <img
            src='./assets/histoire/samurai.png'
            alt='samurai'
            className='img samurai-img'
          />
        </div>
        <div id='samurai-text' className='samurai-text'>
          <p>
            Il y a <span className='one4all-font red'>30 ans</span>, un ??l??ve de
            CP ?? l?????cole du Mandinet en ??le-de-France, exprimait devant sa
            classe son souhait de changer le monde, de stopper la maltraitance
            animale et d?????radiquer la famine. Un simple exercice qui consistait
            ?? illustrer le m??tier que chaque enfant d??sirait exercer ?? l?????ge
            adulte... Devenu adulte,{' '}
            <span className='one4all-font red'>l???objectif</span> de cet enfant
            utopiste s???est renforc?? et concr??tis?? au fil des ??preuves
            rencontr??es sur son parcours
          </p>
        </div>
      </article>
      <article className='hope'>
        <div id='hope-img-container' className='hope-img-container'>
          <img
            src='./assets/histoire/parchemin copie.png'
            alt='hope'
            className='img'
          />
        </div>
        <div id='hope-text' className='hope-text'>
          <div id='soleil-img-container' className='soleil-img-container'>
            <img
              src='assets/histoire/soleil rouge.png'
              alt='soleil rouge'
              className='img'
            />
          </div>
          <p id='histoire-text'>
            ...commence ?? f??d??rer les citoyens du monde et plus particuli??rement
            les jeunes pour mettre en oeuvre son plan d'action ?? l'??chelle
            plan??taire. Cet illumin?? r??aliste, c???est Don Vebole, venez d??couvrir
            son histoire et son projet humanitaire au travers du Mouvement{' '}
            <span className='one4all-font red'>#One4All</span> ...
          </p>
          <button id='red' className='btn btn-red'>
            D??couvrir
          </button>
        </div>
      </article>
    </section>
  );
};

export default Histoire;
