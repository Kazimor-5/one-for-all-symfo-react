import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { follow } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
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
    slideInBottom('.titre-mission-1');
  }, []);


  useEffect(() => {
    slideInBottom('.mission-image1');
  }, []);

  useEffect(() => {
    slideInBottom('.mission-image3');
  }, []);


  return (
    <section className='section-page-mission'>
      <article className='mission-header'>
        <img className='img' src='./assets/missions/Slide-planete.jpg' />
      </article>
      <article className='mission-container1'>
           <h2 className='bold titre-mission-1'>Nos Mission</h2>
          <div className="mission-content">
            <div className='mission-text'>
              <p>
                <span className="font-gray one4all-font">#One4All</span> porte son regard sur le monde et ses enjeux en militant activement dans
                plusieurs domaines d’intervention :
              </p>
            </div>
            <div className='mission-image1'>
              <img  className='img' src='./assets/missions/Fleur-5domaines.png' />
            </div> 
          </div>    
      </article>
      <article className='mission-container2'>
        <div className='mission-content2'>
          <h2 className='bold'>Découvrir les prochaines missions <span className="font-gray one4all-font">#One4All</span> en 2022 :</h2>
          <div className='reseau-content-bouttons-mission'>
              <button className='btn'>Economique, Social & Culturel</button>
              <button className='btn'>Humanitaire</button>
              <button className='btn'>Monde Animalier</button>
              <button className='btn'>Environnemental</button>
              <button className='btn'>Médical, Technologique & Artistique</button>
          </div> 
        </div>
      </article>
      <article className='mission-container3'>
        <p>
          <span className="font-gray one4all-font">#One4All</span> est actuellement dans sa phase de structuration pour ensuite passer au développement puis au lancement.
        </p>
        <div className='mission-image3'>
            <img className='img' src='./assets/missions/thermo-copie.png' />
        </div>
        <p>
          Vous êtes libres de participer à la construction de <span className="font-gray one4all-font">#One4All</span>, d’aider à son développement ou encore de vous engager à nos côtés au sein de notre structure.
        </p>
        <h2 className='titre1'>Bâtissons ensemble l’avenir de l’Humanité !</h2>
        <h2 className='titre2'>Soutenir <span className="one4all-font">#One4All</span></h2>
        <button className='btn btn-soutenir'>JE PARTICIPE</button>
      </article>
    </section>
  );
};

export default Mission;
