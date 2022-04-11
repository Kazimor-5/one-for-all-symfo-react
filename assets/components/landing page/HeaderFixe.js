import React from 'react';

const HeaderFixe = () => {
  return (
    <section className='header-fixe'>
      <article className='background'>
        <img
          src='./assets/header/logocolor.png'
          alt='logo-fleur'
          className='img logo-fleur'
        />
        <div className='text-container'>
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
