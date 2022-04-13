// ! FILES
import React from 'react';
import useIntersect from './useIntersect';

const Philosophie = () => {
  const [containerRef, isVisible] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section className='section-philosophie' ref={containerRef}>
      <article className='philo-img-container'>
        <h2
          className={
            isVisible
              ? 'philo-title bold slide-top active'
              : 'philo-title bold slide-top'
          }
        >
          notre philosophie
        </h2>
        <div className='gandhi-img-container' ref={containerRef}>
          <img
            src='./assets/philosophie/gandhi.png'
            alt='gandhi'
            className={
              isVisible
                ? 'img gandhi slide-right active'
                : 'img gandhi slide-right'
            }
          />
        </div>
      </article>
      <article className='wave'>
        <svg
          width='100%'
          height='50px'
          viewBox='0 0 1920 80'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <path
            className='elementor-shape-fill'
            d='M1920,60s-169.5,20-510,20S850.5,20,510,20,0,60,0,60V0H1920Z'
          ></path>
        </svg>
      </article>
      <article className='founder' ref={containerRef}>
        <div
          className={
            isVisible
              ? 'founder-img-container slide-left active'
              : 'founder-img-container slide-left active'
          }
        >
          <img
            src='./assets/philosophie/don_vebole.png'
            alt='don vebole'
            className='img founder-img'
          />
        </div>
        <div
          className={
            isVisible
              ? 'philo-content slide-right active'
              : 'philo-content slide-right'
          }
        >
          <p className='part1'>
            Le Mouvement mondial <span className='one4all-font'>#One4All</span>{' '}
            est entièrement autonome et alimenté par l'énergie, la motivation et
            la pugnacité de ses membres.
          </p>
          <p className='part2'>
            Comme sa devise l'indique “
            <span className='bold'>Un pour tous, Tous pour un</span>“ ,{' '}
            <span className='bold'>l'association</span> prône la{' '}
            <span className='bold'>
              force collective, l'union, l'abnégation, la confiance indéfectible
              et la réussite désintéressée.
            </span>
          </p>
          <p className='part3'>
            <span className='one4all bold'>#One4All</span> est fondé
            intégralement sur ces principes qui composnet le{' '}
            <span className='bold'>ciment solidarisant chaque militant</span>
          </p>
          <button className='btn white'>notre philosophie</button>
        </div>
      </article>
    </section>
  );
};

export default Philosophie;
