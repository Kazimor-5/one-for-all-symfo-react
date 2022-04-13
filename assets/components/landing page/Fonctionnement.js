import React from 'react';
import useIntersect from './useIntersect';

const Fonctionnement = () => {
  const [containerRef, isVisible] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section className='section-fonctionnement' ref={containerRef}>
      <article
        className={
          isVisible
            ? 'banner-img-container slide-top active'
            : 'banner-img-container slide-top'
        }
      >
        <img
          src='./assets/fonctionnement/modele-economique.png'
          alt='bannière fonctionnement'
          className='img'
        />
      </article>
      <article className='fonctionnement' ref={containerRef}>
        <div
          className={
            isVisible
              ? 'fonctionnement-content slide-right active'
              : 'fonctionnement-content slide-right'
          }
        >
          <h3 className='bold'>l'autofinancement comme modèle</h3>
          <p className='fonctionnement-text bold'>
            Pour financer ses actions{' '}
            <span className='one4all-font purple'>#One4All</span> a opté pour un
            système inexploité par d'autres associations
          </p>
          <button className='btn'>activités</button>
        </div>
        <div className='fonctionnement-img-container' ref={containerRef}>
          <img
            src='./assets/fonctionnement/mode_de_fonctionnement.png'
            alt='mode de fonctionnement'
            className={
              isVisible ? 'img slide-bottom active' : 'img slide-bottom'
            }
          />
        </div>
      </article>
    </section>
  );
};

export default Fonctionnement;
