// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Structure from './Structure';

gsap.registerPlugin(ScrollTrigger);

const ModeFonctionnement = () => {
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
    slideInTop('.model-economique-image');
  }, []);

  useEffect(() => {
    slideInTop('.image-fonctionnement2');
  }, []);

  return (
    <>
      <section className='modeFonctionnement'>
        <article className='header-fonctionnement'>
          <img
            className='image-header-fonctionnement img'
            src='./assets/fonctionnement/Slide-Store-fonctionnement.jpg'
          />
          <img
            className='image-store-slide'
            src='./assets/fonctionnement/Slide-2-1.png'
          />
        </article>
        <article className='content-model'>
          <div className='image-titre-fonctionnement'>
            <img src='./assets/fonctionnement/modele-economique.png' />
          </div>
          <div className='model-economique-titres'>
            <h2>L’AUTOFINANCEMENT COMME MODÈLE :</h2>
            <h3>
              Pour financer ses actions,{' '}
              <span className='one4all-font'>#One4All</span> a opté pour un
              système inexploité par d’autres associations.
            </h3>
          </div>
          <div className='model-economique-text'>
            Nous avons choisi de financer nos propres activités par
            l’organisation d’événements, la création de structures commerciales
            telles que la Market-place «
            <span className='one4all-font'>#One4All</span> Store», la marque de
            prêt-à-porter « #ONE-IV-ALL California » ainsi que la mise en place
            de dispositifs d’envergure mondiale à l’image du « Label{' '}
            <span className='one4all-font'>#One4All</span> ».
          </div>
          <div className='model-economique-image'>
            <img src='./assets/fonctionnement/mode_de_fonctionnement.png' />
          </div>
        </article>
      </section>
      <Structure />
    </>
  );
};

export default ModeFonctionnement;
