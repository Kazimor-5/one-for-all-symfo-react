// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophie = () => {
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
        x: -100,
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
        y: 100,
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
        y: -100,
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
    slideInTop('#philo-title');
  }, []);

  useEffect(() => {
    slideInLeft('#gandhi-img-container');
  }, []);

  useEffect(() => {
    slideInTop('#founder-img-container');
  }, []);

  useEffect(() => {
    slideInLeft('#part-1');
  }, []);

  useEffect(() => {
    slideInRight('#part-2');
  }, []);

  useEffect(() => {
    slideInLeft('#part-3');
  }, []);

  useEffect(() => {
    slideInBottom('#white');
  });

  return (
    <section className='section-philosophie'>
      <article className='philo-img-container'>
        <h2 id='philo-title' className='philo-title bold'>
          notre philosophie
        </h2>
        <div id='gandhi-img-container' className='gandhi-img-container'>
          <img
            src='./assets/philosophie/gandhi.png'
            alt='gandhi'
            className='img gandhi'
          />
        </div>
      </article>
      <article className='wave'>
        <svg
          width='100%'
          height='50px'
          viewBox='0 0 1920 80'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <path
            className='elementor-shape-fill'
            d='M1920,60s-169.5,20-510,20S850.5,20,510,20,0,60,0,60V0H1920Z'
          ></path>
        </svg>
      </article>
      <article className='founder'>
        <div id='founder-img-container' className='founder-img-container'>
          <img
            src='./assets/philosophie/don_vebole.png'
            alt='don vebole'
            className='img founder-img'
          />
        </div>
        <div className='philo-content'>
          <p id='part-1' className='part1'>
            Le Mouvement mondial <span className='one4all-font'>#One4All</span>{' '}
            est entièrement autonome et alimenté par l'énergie, la motivation et
            la pugnacité de ses membres.
          </p>
          <p id='part-2' className='part2'>
            Comme sa devise l'indique “
            <span className='bold'>Un pour tous, Tous pour un</span>“ ,{' '}
            <span className='bold'>l'association</span> prône la{' '}
            <span className='bold'>
              force collective, l'union, l'abnégation, la confiance indéfectible
              et la réussite désintéressée.
            </span>
          </p>
          <p id='part-3' className='part3'>
            <span className='one4all bold'>#One4All</span> est fondé
            intégralement sur ces principes qui composnet le{' '}
            <span className='bold'>ciment solidarisant chaque militant</span>
          </p>
          <button id='white' className='btn white'>
            notre philosophie
          </button>
        </div>
      </article>
    </section>
  );
};

export default Philosophie;
