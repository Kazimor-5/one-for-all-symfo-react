import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Revolution = () => {
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
    slideInTop('#revolution-title');
  }, []);

  useEffect(() => {
    slideInLeft('#revolution-text-part-1');
  }, []);

  useEffect(() => {
    slideInRight('#revolution-text-part-2');
  }, []);

  useEffect(() => {
    slideInLeft('#revolution-text-part-3');
  }, []);

  useEffect(() => {
    slideInRight('#revolution-img-container');
  });

  useEffect(() => {
    slideInTop('#ambition-title');
  }, []);

  useEffect(() => {
    slideInRight('#ambition-text');
  }, []);

  useEffect(() => {
    slideInLeft('#map-img-container');
  }, []);

  useEffect(() => {
    slideInBottom('#revolution-btn');
  }, []);

  return (
    <section className='section-revolution'>
      <article id='revolution-title' className='revolution-title'>
        <h2 className='bold'>notre révolution</h2>
      </article>
      <article className='revolution-content'>
        <div className='revolution-text'>
          <p id='revolution-text-part-1'>
            <span className='purple bold'>Le déséquilibre mondial</span> que
            nous connaissons est inédit dans les chroniques de l'Humanité.
            Crises sanitaires, déréglements climatique, conflits sociaux et
            guerres.
          </p>
          <p id='revolution-text-part-2'>
            Tous ces signes démontrent la fragiité de notre système économique
            et social qui se fonde sur{' '}
            <span className='purple bold'>
              la recherche perpétuelle du profit
            </span>{' '}
            par l'exploitation sans limites des ressources de notre planète,
            quelles soient humaines ou naturelles.
          </p>
          <p id='revolution-text-part-3'>
            Ces évènements impactent l'intégralité de l'Humanité et paralysent
            tous les domaines à travers le monde. Les limites de système
            capitaliste actuel sont mis en lumière et prouvent qu'à l'heure ou
            la division entre les humains n'a jamais été aussi grande,{' '}
            <span className='purple bold'>la solidarité</span> est la seule
            issue au destin funeste qui menace notre civilisation.
          </p>
        </div>
        <div id='revolution-img-container' className='revolution-img-container'>
          <img
            src='./assets/revolution/Slide-revolution.png'
            alt='notre révolution'
            className='img'
          />
        </div>
      </article>
      <article className='article-ambition'>
        <p id='ambition-title' className='bold'>
          L'ambition du Mouvement{' '}
          <span className='one4all-font purple'>#One4All</span> est simple:
        </p>
        <p id='ambition-text'>
          Créer{' '}
          <span className='purple bold'>
            un nouveau système Social et Économique
          </span>{' '}
          fondé sur la philosophie de l'Altruisme par la mise en place d'un{' '}
          <span className='purple bold'>
            Gouvernement Mondial dans 165 pays
          </span>
          .
        </p>
        <div id='map-img-container' className='map-img-container'>
          <img
            src='./assets/revolution/earth.png'
            alt='implantation de #One4All dans le monde'
            className='img'
          />
        </div>
        <button id='revolution-btn' className='btn'>
          notre révolution
        </button>
      </article>
    </section>
  );
};

export default Revolution;
