import React from 'react';

const Fonctionnement = () => {
  return (
    <section className='section-fonctionnement'>
      <article className='banner-img-container'>
        <img
          src='./assets/fonctionnement/modele-economique.png'
          alt='bannière fonctionnement'
          className='img'
        />
      </article>
      <article className='fonctionnement'>
        <div className='fonctionnement-content'>
          <h3 className='bold'>l'autofinancement comme modèle</h3>
          <p className='fonctionnement-text bold'>
            Pour financer ses actions{' '}
            <span className='one4all-font purple'>#One4All</span> a opté pour un
            système inexploité par d'autres associations
          </p>
          <button className='btn'>activités</button>
        </div>
        <div className='fonctionnement-img-container'>
          <img
            src='./assets/fonctionnement/mode_de_fonctionnement.png'
            alt='mode de fonctionnement'
            className='img'
          />
        </div>
      </article>
    </section>
  );
};

export default Fonctionnement;
