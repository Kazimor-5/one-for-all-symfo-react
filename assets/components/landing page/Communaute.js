// ! FILES
import React, { useEffect } from 'react';
import { socialLinks, people } from '../../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Communaute = () => {
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
    slideInTop('#communaute-title');
  }, []);

  useEffect(() => {
    slideInLeft('#communaute');
  }, []);

  useEffect(() => {
    slideInRight('#communaute-text-part-1');
  }, []);

  useEffect(() => {
    slideInLeft('#communaute-text-part-2');
  }, []);

  useEffect(() => {
    slideInRight('#communaute-links');
  }, []);

  useEffect(() => {
    slideInBottom('#communaute-grid');
  }, []);

  useEffect(() => {
    slideInTop('#cell-1');
  }, []);

  useEffect(() => {
    slideInRight('#cell-2');
  }, []);

  useEffect(() => {
    slideInBottom('#cell-3');
  }, []);

  useEffect(() => {
    slideInLeft('#cell-4');
  }, []);

  return (
    <section className='section-communaute'>
      <article className='communaute-content'>
        <div id='communaute-title' className='communaute-title'>
          <img
            src='./assets/reseau/une_communaute_inter.png'
            alt='communauté titre'
            className='img'
          />
        </div>
        <div className='communaute-text'>
          <p id='communaute' className='communaute purple bold'>
            rejoins notre communauté !
          </p>
          <p id='communaute-text-part-1'>
            <span className='purple'>De nombreuses personnes</span> à travers le
            monde se lèvent et marchent ensemble dans le but de faire émerger le
            Mouvement <span className='one4all-font bold purple'>#One4All</span>{' '}
            et relayer le message de la philosophie Altruiste au plus grand
            nombre.
          </p>
          <p id='communaute-text-part-2'>
            Rejoignez une communauté internationale et{' '}
            <span className='purple'>diffusez le message de</span>{' '}
            <span className='one4all-font purple'>#One4All</span> à travers le
            monde.
          </p>
        </div>
        <div id='communaute-links' className='communaute-links'>
          <div className='communaute-link'>
            <p>rejoins la communauté</p>
            <p>&amp;</p>
            <p>change le monde</p>
          </div>
          <ul className='social-links'>
            {socialLinks.map((link) => {
              const { id, src, anchor } = link;
              return (
                <li key={id} className='social-link'>
                  <a href={anchor}>{src}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
      <article id='communaute-grid' className='communaute-grid'>
        {people.map((person) => {
          const { id, name, src, idName } = person;

          return (
            <div key={id} id={idName} className='cell'>
              <div className='cell-img-container'>
                <img src={src} alt={name} className='img' />
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Communaute;
