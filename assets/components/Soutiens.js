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
      </article>
      <article className='soutiensPage-content'>
        <p>
          Le projet altruiste de{' '}
          <span className='one4all-font purple'>#One4All</span> suscite
          l’intérêt de nombreuses personnalités et influenceurs qui voient en
          notre organisation un modèle fiable, susceptible de permettre des
          avancées significatives. Ces femmes et ces hommes célèbres ont initié
          un mode de vie respectueux de l’Autre et font le choix d’être des
          héros pour les générations futures en rejoignant la{' '}
          <span className='bold'>Ligue des Héros Altruistes</span>.
        </p>
      </article>
      <div className='soutiensPage-picture-container'>
        <article className='soutiensPage-img-container'>
          <img
            src='./assets/ligue/soutiens_slide1.jpg'
            alt='Franck Kessié, Yann Karamoh et Gervinho, parrains de l’association #One4All'
            className='img'
          />
        </article>
        <article className='soutiensPage-img-container-vert'>
          <img
            src='./assets/ligue/lisa_vanderpump.jpg'
            alt='lisa vanderpump'
            className='img'
          />
          <img src='./assets/ligue/redfoo.jpg' alt='redfoo' className='img' />
        </article>
        <article className='soutiensPage-img-container'>
          <img
            src='./assets/ligue/matt_damon.jpg'
            alt='matt damon'
            className='img'
          />
        </article>
      </div>
      <article className='soutiensPage-content'>
        <p>
          Ces personnalités, venant d’horizons divers (sport, musique, cinéma…),
          ont décidé de se fédérer et de s’unir autour de{' '}
          <span className='one4all-font purple'>#One4All</span> afin de
          participer à la{' '}
          <span className='bold'>
            création d’un nouveau système économique altruiste
          </span>
          .
        </p>
        <button className='btn'>visiter le site</button>
      </article>
    </section>
  );
};

export default Soutiens;
