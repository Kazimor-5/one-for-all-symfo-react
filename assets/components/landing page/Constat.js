import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Constat = () => {
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
    slideInTop('#constat-title');
  }, []);

  useEffect(() => {
    slideInRight('#hand-img-container');
  }, []);

  useEffect(() => {
    slideInLeft('#constat-text');
  }, []);

  useEffect(() => {
    slideInRight('#constat-text-part-1');
  }, []);

  useEffect(() => {
    slideInLeft('#constat-text-part-2');
  }, []);

  useEffect(() => {
    slideInRight('#constat-text-part-3');
  }, []);

  return (
    <section className='section-constat'>
      <article id='constat-title' className='constat-title '>
        <h2 className='bold'>notre constat</h2>
      </article>
      <article className='constat-content'>
        <div id='hand-img-container' className='hand-img-container'>
          <img src='./assets/constat/imaneConstat.png' alt='' className='img' />
        </div>
        <div id='constat-text' className='constat-text'>
          <p id='constat-text-part-1'>
            <span className='purple bold'>La crise du Covid-19</span> a r??v??l??
            les failles de notre syst??me mondial ?? r??agir face ?? une crise
            sanitaire d'ampleur internationale. Les gouvernements ont montr??
            leurs limites quant ?? l'application de mesures communes et
            efficaces. Chaque pays se comparant pour ??valuer sa gestion de la
            crise.
          </p>
          <p id='constat-text-part-2'>
            <span className='purple bold'>Le conflit en Ukraine</span> est un
            autre t??moignage de l'incapacit?? des organisations mondiales ??
            maintenir la paix du fait de leurs interd??pendances ??conomiques. Ce
            mod??le soci??tale pour l'Humanit?? est menac??.
          </p>
          <p id='constat-text-part-3'>
            Il semble aujourd'hui plus que n??cessaire de proposer une autre
            voie, plus respectueuse des ??tres qui peuplent la Terre gr??ce ?? un{' '}
            <span className='purple bold'>Altruisme mondial</span>, sans
            fronti??res entre les nations et les Hommes. Ce constat demande
            d'agir maintenant, pour trouver une alternative p??renne au syst??me
            actuel.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Constat;
