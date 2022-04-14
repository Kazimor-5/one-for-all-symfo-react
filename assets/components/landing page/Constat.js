import React from 'react';

const Constat = () => {
  return (
    <section className='section-constat'>
      <article className='constat-title '>
        <h2 className='bold'>notre constat</h2>
      </article>
      <article className='constat-content'>
        <div className='hand-img-container'>
          <img src='./assets/constat/imaneConstat.png' alt='' className='img' />
        </div>
        <div className='constat-text'>
          <p>
            <span className='purple bold'>La crise du Covid-19</span> a révélé
            les failles de notre système mondial à réagir face à une crise
            sanitaire d'ampleur internationale. Les gouvernements ont montré
            leurs limites quant à l'application de mesures communes et
            efficaces. Chaque pays se comparant pour évaluer sa gestion de la
            crise.
          </p>
          <p>
            <span className='purple bold'>Le conflit en Ukraine</span> est un
            autre témoignage de l'incapacité des organisations mondiales à
            maintenir la paix du fait de leurs interdépendances économiques. Ce
            modèle sociètale pour l'Humanité est menacé.
          </p>
          <p>
            Il semble aujourd'hui plus que nécessaire de proposer une autre
            voie, plus respectueuse des êtres qui peuplent la Terre grâce à un{' '}
            <span className='purple bold'>Altruisme mondial</span>, sans
            frontières entre les nations et les Hommes. Ce constat demande
            d'agir maintenant, pour trouver une alternative pérenne au système
            actuel.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Constat;
