// ! COMPONENTS
import SoutiensSlider from './SoutiensSlider';
// ! FILES
import React from 'react';

const Soutiens = () => {
  return (
    <section className='section-soutiens'>
      <article className='top'>
        <h2 className='soutiens-title bold'>nos soutiens</h2>
        <SoutiensSlider />
      </article>
      <article className='bottom'>
        <div className='ligue-img-container'>
          <img
            src='./assets/ligue/logo-ligue-LHA-300x300.png'
            alt='logo ligue'
            className='img'
          />
        </div>
        <div className='soutiens-text'>
          <p>
            Le Mouvement{' '}
            <span className='one4all-font purple bold'>#One4All</span> suscite
            l'intérêt de nombreuses personnalités et influenceurs qui voient en
            notre organisation, un système alternatif et un modèle fiable,
            susceptible de permettre des avancées significatives à{' '}
            <span className='purple bold'>l'échelle planétaire</span>
          </p>
        </div>
        <button className='btn'>nos soutiens</button>
      </article>
    </section>
  );
};

export default Soutiens;
