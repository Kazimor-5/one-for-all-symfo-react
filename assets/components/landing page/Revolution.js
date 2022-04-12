import React from 'react';

const Revolution = () => {
  return (
    <section className='section-revolution'>
      <article className='revolution-title'>
        <h2 className='bold'>notre révolution</h2>
      </article>
      <article className='revolution-content'>
        <div className='revolution-text'>
          <p>
            <span className='purple bold'>Le déséquilibre mondial</span> que
            nous connaissons est inédit dans les chroniques de l'Humanité.
            Crises sanitaires, déréglements climatique, conflits sociaux et
            guerres.
          </p>
          <p>
            Tous ces signes démontrent la fragiité de notre système économique
            et social qui se fonde sur{' '}
            <span className='purple bold'>
              la recherche perpétuelle du profit
            </span>{' '}
            par l'exploitation sans limites des ressources de notre planète,
            quelles soient humaines ou naturelles.
          </p>
          <p>
            Ces évènements impactent l'intégralité de l'Humanité et paralysent
            tous les domaines à travers le monde. Les limites de système
            capitaliste actuel sont mis en lumière et prouvent qu'à l'heure ou
            la division entre les humains n'a jamais été aussi grande,{' '}
            <span className='purple bold'>la solidarité</span> est la seule
            issue au destin funeste qui menace notre civilisation.
          </p>
        </div>
      </article>
      <article className='article-ambition'>
        <p className='bold'>
          L'ambition du Mouvement{' '}
          <span className='one4all-font purple'>#One4All</span> est simple:
        </p>
        <p>
          Créer{' '}
          <span className='purple bold'>
            un nouveau système Social et Économique
          </span>{' '}
          fondé sur la philosophie de l'Altruisme par la mise en place d'un{' '}
          <span className='purple bold'>
            Gouvernement Mondial dans 165 pays
          </span>
          .
        </p>
        <div className='map-img-container'>
          <img
            src='./assets/revolution/earth.png'
            alt='implantation de #One4All dans le monde'
            className='img'
          />
        </div>
        <button className='btn'>notre révolution</button>
      </article>
    </section>
  );
};

export default Revolution;
