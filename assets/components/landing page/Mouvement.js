// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mouvement = () => {
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
    slideInTop('#title-mouvement');
  }, []);

  useEffect(() => {
    slideInLeft('#text-mouvement');
  }, []);

  useEffect(() => {
    slideInRight('#domains-fleur');
  }, []);

  useEffect(() => {
    slideInTop('#milite');
  }, []);

  useEffect(() => {
    slideInBottom('#domains');
  }, []);

  useEffect(() => {
    slideInRight('#objectifs');
  }, []);

  useEffect(() => {
    slideInBottom('#missions');
  }, []);

  return (
    <section className='section-mouvement'>
      <h2 id='title-mouvement' className='title-mouvement bold'>
        Le mouvement altruiste{' '}
        <span className='one4all-font purple'>#One4All</span>
      </h2>
      <article className='content'>
        <div className='text-mouvement'>
          <p id='text-mouvement'>
            Le Mouvement Altruiste{' '}
            <span className='one4all-font purple'>#One4All</span> a pour but de
            fédérer tous les Hommes -{' '}
            <span className='purple bold'>
              indépendemment de leur religion, ethnie ou culture
            </span>{' '}
            qui adhèrent à l'idéologie de l'Altruisme.
          </p>
          <div id='domains-fleur' className='img-fleur'>
            <img
              src='./assets/presentation/Fleur.png'
              alt='fleur des domaines'
              className='img'
            />
          </div>
        </div>
        <div className='domaines'>
          <p id='milite' className='bold'>
            <span className='one4all-font purple'>#One4All</span> milite
            activement et mondialement dans plusieurs domaines:
          </p>
          <img
            id='domains'
            src='./assets/presentation/5_domaines.png'
            alt='les cinq domaines'
            className='img'
          />
        </div>
      </article>
      <article id='objectifs' className='objectifs'>
        <p style={{ overflow: 'hidden' }}>
          afin d'atteindre ses objectifs, le mouvement{' '}
          <span className='one4all-font purple'>#One4All</span> se construit
          grâce à la mise en commun de la culture, des connaissances, des
          ressources, et de la détermination de chaque militant où qu'il soit
          dans le monde.
        </p>
        <button id='missions' className='btn'>
          nos missions
        </button>
      </article>
    </section>
  );
};

export default Mouvement;
