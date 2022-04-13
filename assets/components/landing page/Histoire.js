import React from 'react';
import useIntersect from './useIntersect';

const Histoire = () => {
  const [containerRef, isVisible] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section className='section-histoire' ref={containerRef}>
      <article
        className={
          isVisible
            ? 'histoire-title-container slide-top active'
            : 'histoire-title-container slide-top'
        }
      >
        <img
          src='./assets/histoire/titre.png'
          alt='histoire du mouvement'
          className='img'
        />
      </article>
      <article className='samurai-container' ref={containerRef}>
        <div
          className={
            isVisible
              ? 'samurai-img-container slide-left active'
              : 'samurai-img-container slide-left'
          }
        >
          <img
            src='./assets/histoire/samurai.png'
            alt='samurai'
            className='img samurai-img'
          />
        </div>
        <div
          className={
            isVisible
              ? 'samurai-text slide-right active'
              : 'samurai-text slide-right active'
          }
        >
          <p>
            Il y a <span className='one4all-font red'>30 ans</span>, un élève de
            CP à l’école du Mandinet en Île-de-France, exprimait devant sa
            classe son souhait de changer le monde, de stopper la maltraitance
            animale et d’éradiquer la famine. Un simple exercice qui consistait
            à illustrer le métier que chaque enfant désirait exercer à l’âge
            adulte... Devenu adulte,{' '}
            <span className='one4all-font red'>l’objectif</span> de cet enfant
            utopiste s’est renforcé et concrétisé au fil des épreuves
            rencontrées sur son parcours
          </p>
        </div>
      </article>
      <article className='hope' ref={containerRef}>
        <div
          className={
            isVisible
              ? 'hope-img-container slide-top active'
              : 'hope-img-container slide-top'
          }
        >
          <img
            src='./assets/histoire/parchemin copie.png'
            alt='hope'
            className='img'
          />
        </div>
        <div className='hope-text' ref={containerRef}>
          <div
            className={
              isVisible
                ? 'soleil-img-container slide-left active'
                : 'soleil-img-container slide-left'
            }
          >
            <img
              src='assets/histoire/soleil rouge.png'
              alt='soleil rouge'
              className='img'
            />
          </div>
          <p className={isVisible ? 'slide-right active' : 'slide-right'}>
            ...commence à fédérer les citoyens du monde et plus particulièrement
            les jeunes pour mettre en oeuvre son plan d'action à l'échelle
            planétaire. Cet illuminé réaliste, c’est Don Vebole, venez découvrir
            son histoire et son projet humanitaire au travers du Mouvement{' '}
            <span className='one4all-font red'>#One4All</span> ...
          </p>
          <button
            className={
              isVisible
                ? 'btn btn-red slide-bottom active'
                : 'btn btn-red slide-bottom'
            }
          >
            Découvrir
          </button>
        </div>
      </article>
    </section>
  );
};

export default Histoire;
