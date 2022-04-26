// ! FILES
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModeFonctionnement = () => {
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
    slideInTop('.image-foctionnement2');
  }, []);


  return (
    <section className='modeFonctionnement'>
      <article className='header-fonctionnement'>
        <img className='image-header-fonctionnement img' src='./assets/fonctionnement/Slide-Store-fonctionnement.jpg' />
        <img className='image-store-slide' src='./assets/fonctionnement/Slide-2-1.png' />
      </article>
      <article className='content-model'>
        <div className='image-titre-fonctionnement'>
          <img src='./assets/fonctionnement/modele-economique.png' />
        </div>
        <div className='model-economique-titres'>
          <h2>L’AUTOFINANCEMENT COMME MODÈLE :</h2>
          <h3>Pour financer ses actions, <span className="one4all-font">#One4All</span> a opté pour un système inexploité par d’autres associations.</h3>
        </div>
        <div className='model-economique-text'>
          Nous avons choisi de financer nos propres activités par l’organisation d’événements, la création de structures commerciales telles que la Market-place «<span className="one4all-font">#One4All</span> Store», la marque de prêt-à-porter « #ONE-IV-ALL California » ainsi que la mise en place de dispositifs d’envergure mondiale à l’image du « Label <span className="one4all-font">#One4All</span> ».
        </div>
        <div className='model-economique-image'>
          <img src='./assets/fonctionnement/mode_de_fonctionnement.png' />
        </div>
        <div className='section-structure'>
          <h2>UNE STRUCTURE DURABLE</h2>
          <div className='structure-content1'>
            <p>Il aura fallu attendre plus de <span className="fonctionnement-font-noir">80 ans</span> après sa création pour que <span className="fonctionnement-font-noir">la Croix Rouge</span> soit reconnue d’utilité publique. La construction de <span className="fonctionnement-font-noir">Notre-Dame de Paris</span> s’est étendue sur<span className="fonctionnement-font-noir">plus de 200 ans.</span> </p>
            <p><span className="fonctionnement-font-noir">Créé en 2020</span>, <span className="one4all-font">#One4All</span> a fait le choix de maîtriser ses actions en totale transparence sur l’intégralité de son processus. La pérennité des actions de <span className="one4all-font">#One4All</span> repose sur une <span className="fonctionnement-font-noir">structuration solide, indépendante</span> et sur votre choix ou non d’apporter votre pierre à l’édifice.</p>
            <p>Notre <span className="fonctionnement-font-noir">système d’autofinancement</span> est la clé de voûte pour permettre des prises de décisions libres et non parasitées par des intérêts individuels qui seraient à l’encontre de la pensée Altruiste.</p>
            <p>Mais c’est aussi la meilleure stratégie pour garantir une <span className="fonctionnement-font-noir">maîtrise</span> et une <span className="fonctionnement-font-noir">transparence totale</span> envers nos collaborateurs et tous nos contributeurs.</p>
            <p><span className="one4all-font">#One4All</span> est actuellement dans sa phase de <span className="fonctionnement-font-noir">structuration</span> pour ensuite passer au <span className="fonctionnement-font-noir">développement</span> puis au <span className="fonctionnement-font-noir">lancement</span>.</p>
          </div>
          <div className='image-foctionnement2'>
            <img className='img' src='/assets/fonctionnement/thermo.png' />
          </div>
          <div className='content-structure'>
            <p>Vous êtes libres de participer à la construction de #One4All, d’aider à son développement ou encore de vous engager à nos côtés au sein de notre structure.</p>
            <h2>Bâtissons ensemble l’avenir de l’Humanité !</h2>
            <h3>Soutenir <span className="one4all-font">#One4All</span></h3>
            <button className='btn btn-soutenir'>Soutenir</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ModeFonctionnement;
