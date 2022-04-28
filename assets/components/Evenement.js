import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Evenement = () => {
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
    slideInTop('.nos-evenement-image1');
  }, []);

  useEffect(() => {
    slideInTop('.nos-evenement-image2');
  }, []);

  useEffect(() => {
    slideInBottom('.challenge-image');
  }, []);

  useEffect(() => {
    slideInRight('.challenge-image-titre');
  }, []);

  useEffect(() => {
    slideInLeft('.image-defi-famine');
  }, []);

  useEffect(() => {
    slideInTop('.image-defi-famine-titre');
  }, []);

  return (
    <section className='section-page-evenement'>
      <article className='evenement-header'>
        <img src='./assets/evenement/Slide-events.jpg' />
      </article>
      <article className='evenement-content'>
          <div className='evenement-image-titre'>
          <img src='' />
          </div>
          <div className='container-evenement-content'>
              <div className='nos-evenement-content'>
                  <div className='nos-evenement-image1'>
                      <img src='./assets/evenement/s02.png' />
                  </div>
                  <div className='evenement-content1-text'>
                      <p>Le #One4All Giro2020 est une tournée des clubs de football professionnels européens qui a pour objet de sensibiliser les acteurs du monde du sport sur les enjeux et conséquences de la crise du Covid-19.
                      </p>
                      <p>
                          L’objectif de cette tournée est d’inviter les sportifs de haut niveau à participer à la collecte mondiale de fonds à travers l’opération #jeSUISONE4ALL. Une opportunité de briller sur le terrain de la solidarité en tant que sportif et citoyen du monde.
                      </p>
                      <p>   
                          Joueurs et supporters deviennent partenaires du même objectif.
                      </p>
                  </div>
              </div>
              <div className='nos-evenement-image2'>
                <img src='./assets/evenement/bacazazfcvv-02.png' />
              </div>
          </div>
      </article>
      <article className='defi-famine-container'>
          <div className='defi-famine-content'>
            <div className='defi-famine-content-2'>
              <div className='image-defi-famine-titre'>
                <img src='./assets/evenement/defi_famine_2.png' />
              </div>
              <h2 className='bold'>UN DISPOSITIF INÉDIT</h2>
              <div className='defi-famine-text'>
                  <p>
                      Les entreprises participantes à cette opération qui se déroule sur 10 ans s’engagent à collecter et donner au minimum 10 € par jour.
                  </p>
                  <p>
                      C’est le pari que lance #One4All aux 500.000 entreprises (soit plus de 3.000 entreprises engagées par pays) dans le monde qui relèveront le défi.
                  </p>
                  <p>
                      Participer au Défi Famine #One4All, c’est oeuvrer à tourner la page de la faim dans le monde.
                  </p>
              </div> 
            </div>
            <div className='image-defi-famine'>
              <img src='./assets/evenement/defi_famine.png' />
            </div>
          </div>
          <div className='defi-famine-btn'>
            <button className='btn'>
                Participer
            </button>
          </div>
      </article>
      <article className='challenge-je-suis-container'>
          <div className='challenge-image-titre'>
              <img src='./assets/evenement/je_suis_one4all.png' />
          </div>
          <div className='challenge-content'>
              <div className='challenge-image'>
                  <img src='./assets/evenement/je_suis_one4all_2.png' />
              </div>
              <div className='challenge-text-container' >
                  <div className='challenge-titre'>
                      <h3 className='bold' >
                          UN ÉVÉNEMENT HISTORIQUE
                      </h3>
                  </div>
                  <div className='challenge-text-boutton'>
                      <p>
                          Le Mouvement Altruiste #One4All lance un appel international à la solidarité au travers de l’opération #jeSUISONE4ALL pour venir en aide à toutes les personnes, structures sociales et médicales où qu’elles se trouvent dans le monde.
                      </p>
                      <p>
                          La solidarité est un challenge. Regarder en direction des autres est le premier pas sur la Voie de l’Altruisme !
                      </p>
                      <div className='challenge-btn'>
                          <button className='btn'>En savoir plus</button>
                      </div>
                  </div>
              </div>
          </div>
      </article>
    </section>
  );
};

export default Evenement;
