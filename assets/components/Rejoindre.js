import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { follow } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Rejoindre = () => {
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
    slideInBottom('.image-reseau-communaute');
  }, []);

  useEffect(() => {
    slideInTop('.image1-reseau-communaute');
  }, []);

  useEffect(() => {
    slideInBottom('.reseau-image1');
  }, []);

  useEffect(() => {
    slideInBottom('.reseau-image4');
  }, []);

  useEffect(() => {
    slideInLeft('.reseau-image2');
  }, []);

  return (
    <section className='section-page-rejoindre'>
      <article className='reseau-header'>
        <img className='img' src='./assets/reseau/Slide-Notre-réseau.jpg' />
      </article>
      <article className='reseau-container1'>
        <div className='reseau-content1'>
          <div className='reseau-image2'>
            <img className='img' src='./assets/reseau/reseau-700x211.png' />
          </div>

          <div className='reseau-content1-text'>
            <div className='reseau-image1'>
              <img className='img' src='./assets/reseau/planet.png' />
            </div>
            <div className='reseau-para'>
              <p>
                <span className='font-gray one4all-font'>#One4All</span> a pour
                objectif de{' '}
                <span className='font-noir'>s’implanter dans 165 pays</span>{' '}
                afin de développer le système Altruiste à l’échelle planétaire.
              </p>
              <p>
                Le réseau{' '}
                <span className='font-gray one4all-font'>#One4All</span> se
                construit grâce à la mise en place d’antennes locales et
                nationales qui synchronisent mondialement leurs actions. C’est
                grâce aux bâtisseurs d’aujourd’hui et de demain que nous
                construirons un avenir robuste et solidaire.
              </p>
            </div>
          </div>
        </div>
      </article>
      <article className='reseau-container2'>
        <div className='reseau-content2'>
          <div className='image-reseau-communaute'>
            <img
              className='img'
              src='./assets/reseau/une_communaute_inter.png'
            />
          </div>
          <div className='reseau-content-text2'>
            <p>
              <span className='font-noir'>
                De nombreuses personnes à travers le monde
              </span>{' '}
              se lèvent et marchent ensemble dans le but de faire émerger le
              Mouvement <span className='one4all-font gray'>#One4All</span> et
              relayer le message de la philosophie Altruiste au plus grand
              nombre.
            </p>
            <h3 className='bold'>REJOIGNEZ NOTRE COMMUNAUTÉ !!!</h3>
            <div className='follow'>
              {follow.map((item) => {
                const { id, icon, network, anchor } = item;

                return (
                  <a
                    key={id}
                    href={anchor}
                    className={`follow-anchor ${network}`}
                  >
                    <i className='follow-icon'>{icon}</i>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className='image1-reseau-communaute'>
          <img className='img' src='./assets/reseau/international.png' />
        </div>
      </article>
      <article className='reseau-container3'>
        <div className='reseau-image4'>
          <img className='img' src='./assets/reseau/avddv-02-1.png' />
        </div>
        <ul className='reseau-challenge-content'>
          <li>
            {'> '} Rejoindre la Team{' '}
            <span className='font-gray one4all-font'>#One4All</span>
          </li>
          <li>{'> '} Faire un don – Legs</li>
          <li>
            {'> '}Faire un achat sur la boutique{' '}
            <span className='font-noir '>
              #ONE-<span className='font-yellow'>IV</span>
              <span className='font-noir'>-ALL</span>
            </span>{' '}
            California
          </li>
          <li>
            {'> '}Faire un achat via la Market-place{' '}
            <span className='font-gray one4all-font'>#One4All</span>{' '}
            <span className='font-yellow one4all-font'>Store</span>
          </li>
          <li>
            {'> '}Participer à nos événements : Concerts, Showcases, Festivals,
            Marches et Collectes de Dons.
          </li>
          <li>
            {'> '}Devenir partenaire professionnel de la marque{' '}
            <span className='font-noir '>
              #ONE-<span className='font-yellow'>IV</span>
              <span className='font-noir'>-ALL</span>
            </span>{' '}
            California, du{' '}
            <span className='font-gray one4all-font'>#One4All</span>{' '}
            <span className='font-yellow one4all-font'>Store</span> et/ou du
            Défi FAMINE <span className='font-gray one4all-font'>#One4All</span>
          </li>
        </ul>
      </article>
    </section>
  );
};

export default Rejoindre;
