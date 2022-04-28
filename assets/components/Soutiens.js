import React from 'react';

const Soutiens = () => {
  return (
    <section className='section-soutiensPage'>
      <article className='header-container'>
        <img
          src='./assets/missions/Slide-Ligue.png'
          alt='nos héros altruistes'
          className='img'
        />
      </article>
      <article className='soutienPage-container'>
        <div className='title-ligue-container'>
          <img
            src='./assets/ligue/Titre-ligue.png'
            alt='ligue des héros altruistes'
            className='img'
          />
        </div>
        <div className='soutiensPage-content'>
          <p>
            Le projet altruiste de{' '}
            <span className='one4all-font purple'>#One4All</span> suscite
            l’intérêt de nombreuses personnalités et influenceurs qui voient en
            notre organisation un modèle fiable, susceptible de permettre des
            avancées significatives. Ces femmes et ces hommes célèbres ont
            initié un mode de vie respectueux de l’Autre et font le choix d’être
            des héros pour les générations futures en rejoignant la{' '}
            <span className='bold'>Ligue des Héros Altruistes</span>.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Soutiens;
