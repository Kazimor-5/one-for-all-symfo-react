// ! FILES
import React from 'react';
import useIntersect from './useIntersect';

const Mouvement = () => {
  const [containerRef, isVisible] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section className='section-mouvement' ref={containerRef}>
      <h2
        className={
          isVisible
            ? 'title-mouvement bold slide-left active'
            : 'title-mouvement bold slide-left'
        }
      >
        Le mouvement altruiste{' '}
        <span className='one4all-font purple'>#One4All</span>
      </h2>
      <article className='content' ref={containerRef}>
        <div
          className={
            isVisible
              ? 'text-mouvement slide-top active'
              : 'text-mouvement slide-top'
          }
        >
          <p>
            Le Mouvement Altruiste{' '}
            <span className='one4all-font purple'>#One4All</span> a pour but de
            fédérer tous les Hommes -{' '}
            <span className='purple bold'>
              indépendemment de leur religion, ethnie ou culture
            </span>{' '}
            qui adhèrent à l'idéologie de l'Altruisme.
          </p>
          <div className='img-fleur'>
            <img
              src='./assets/presentation/Fleur.png'
              alt='fleur des domaines'
              className='img'
            />
          </div>
        </div>
        <div className='domaines' ref={containerRef}>
          <p
            className={
              isVisible ? 'bold slide-right active' : 'bold slide-right'
            }
          >
            <span className='one4all-font purple'>#One4All</span> milite
            activement et mondialement dans plusieurs domaines:
          </p>
          <img
            src='./assets/presentation/5_domaines.png'
            alt='les cinq domaines'
            className={
              isVisible ? 'img slide-bottom active' : 'img slide-bottom'
            }
          />
        </div>
      </article>
      <article className='objectifs' ref={containerRef}>
        <p className={isVisible ? 'slide-left active' : 'slide-left'}>
          afin d'atteindre ses objectifs, le mouvement{' '}
          <span className='one4all-font purple'>#One4All</span> se construit
          grâce à la mise en commun de la culture, des connaissances, des
          ressources, et de la détermination de chaque militant où qu'il soit
          dans le monde.
        </p>
        <button
          className={isVisible ? 'btn slide-top active' : 'btn slide-top'}
        >
          nos missions
        </button>
      </article>
    </section>
  );
};

export default Mouvement;
