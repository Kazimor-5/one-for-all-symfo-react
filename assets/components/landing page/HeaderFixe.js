// ! FILES
import React from 'react';
import useIntersect from './useIntersect';

const HeaderFixe = () => {
  const [containerRef, isVisible] = useIntersect({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  });

  return (
    <section className='header-fixe'>
      <article className='background' ref={containerRef}>
        <img
          src='./assets/header/logocolor.png'
          alt='logo-fleur'
          className={
            isVisible
              ? 'img logo-fleur slide-right active'
              : 'img logo-fleur slide-right'
          }
        />
        <div
          className={
            isVisible
              ? 'text-container slide-right active'
              : 'text-container slide-right'
          }
        >
          <img
            src='./assets/header/logo.png'
            alt='logo-fleur'
            className='img'
          />
          <img
            src='./assets/header/logoTextNoir.png'
            alt='logo-fleur'
            className='img text-noir'
          />
        </div>
      </article>
    </section>
  );
};

export default HeaderFixe;
