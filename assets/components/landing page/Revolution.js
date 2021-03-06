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
        <h2 className='bold'>notre r??volution</h2>
      </article>
      <article className='revolution-content'>
        <div className='revolution-text'>
          <p id='revolution-text-part-1'>
            <span className='purple bold'>Le d??s??quilibre mondial</span> que
            nous connaissons est in??dit dans les chroniques de l'Humanit??.
            Crises sanitaires, d??r??glements climatique, conflits sociaux et
            guerres.
          </p>
          <p id='revolution-text-part-2'>
            Tous ces signes d??montrent la fragiit?? de notre syst??me ??conomique
            et social qui se fonde sur{' '}
            <span className='purple bold'>
              la recherche perp??tuelle du profit
            </span>{' '}
            par l'exploitation sans limites des ressources de notre plan??te,
            quelles soient humaines ou naturelles.
          </p>
          <p id='revolution-text-part-3'>
            Ces ??v??nements impactent l'int??gralit?? de l'Humanit?? et paralysent
            tous les domaines ?? travers le monde. Les limites de syst??me
            capitaliste actuel sont mis en lumi??re et prouvent qu'?? l'heure ou
            la division entre les humains n'a jamais ??t?? aussi grande,{' '}
            <span className='purple bold'>la solidarit??</span> est la seule
            issue au destin funeste qui menace notre civilisation.
          </p>
        </div>
        <div id='revolution-img-container' className='revolution-img-container'>
          <img
            src='./assets/revolution/Slide-revolution.png'
            alt='notre r??volution'
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
          Cr??er{' '}
          <span className='purple bold'>
            un nouveau syst??me Social et ??conomique
          </span>{' '}
          fond?? sur la philosophie de l'Altruisme par la mise en place d'un{' '}
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
          notre r??volution
        </button>
      </article>
    </section>
  );
};

export default Revolution;
