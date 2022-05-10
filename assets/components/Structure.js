import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Structure = () => {
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
    <section className='section-structure'>
      <article className='structure-content1'>
        <h2>UNE STRUCTURE DURABLE</h2>
        <div className='structure-content1-text'>
          <p>
            Il aura fallu attendre plus de{' '}
            <span className='fonctionnement-font-noir'>80 ans</span> après sa
            création pour que{' '}
            <span className='fonctionnement-font-noir'>la Croix Rouge</span>{' '}
            soit reconnue d’utilité publique. La construction de{' '}
            <span className='fonctionnement-font-noir'>
              Notre-Dame de Paris
            </span>{' '}
            s’est étendue sur
            <span className='fonctionnement-font-noir'>
              plus de 200 ans.
            </span>{' '}
          </p>
          <p>
            <span className='fonctionnement-font-noir'>Créé en 2020</span>,{' '}
            <span className='one4all-font'>#One4All</span> a fait le choix de
            maîtriser ses actions en totale transparence sur l’intégralité de
            son processus. La pérennité des actions de{' '}
            <span className='one4all-font'>#One4All</span> repose sur une{' '}
            <span className='fonctionnement-font-noir'>
              structuration solide, indépendante
            </span>{' '}
            et sur votre choix ou non d’apporter votre pierre à l’édifice.
          </p>
          <p>
            Notre{' '}
            <span className='fonctionnement-font-noir'>
              système d’autofinancement
            </span>{' '}
            est la clé de voûte pour permettre des prises de décisions libres et
            non parasitées par des intérêts individuels qui seraient à
            l’encontre de la pensée Altruiste.
          </p>
          <p>
            Mais c’est aussi la meilleure stratégie pour garantir une{' '}
            <span className='fonctionnement-font-noir'>maîtrise</span> et une{' '}
            <span className='fonctionnement-font-noir'>
              transparence totale
            </span>{' '}
            envers nos collaborateurs et tous nos contributeurs.
          </p>
          <p>
            <span className='one4all-font'>#One4All</span> est actuellement dans
            sa phase de{' '}
            <span className='fonctionnement-font-noir'>structuration</span> pour
            ensuite passer au{' '}
            <span className='fonctionnement-font-noir'>développement</span> puis
            au <span className='fonctionnement-font-noir'>lancement</span>.
          </p>
        </div>
      </article>
      <article className='structure-content2'>
        <img src='/assets/fonctionnement/thermo.png' />

        <div className='structure-content2-text'>
          <p>
            Vous êtes libres de participer à la construction de #One4All,
            d’aider à son développement ou encore de vous engager à nos côtés au
            sein de notre structure.
          </p>
          <h2>Bâtissons ensemble l’avenir de l’Humanité !</h2>
          <h3>
            Soutenir <span className='one4all-font'>#One4All</span>
          </h3>
          <button className='btn btn-soutenir'>Soutenir</button>
        </div>
      </article>
    </section>
  );
};

export default Structure;
