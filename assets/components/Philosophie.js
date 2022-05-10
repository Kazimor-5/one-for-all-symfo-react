import React from 'react';

const Philosophie = () => {
  return (
    <section className='section-pagePhilo'>
      <article className='title-constat-container'>
        <div className='title-container'>
          <img
            src='./assets/constat/bouton-consta.png'
            alt='notre constat'
            className='img'
          />
        </div>
        <div className='handContainer'>
          <img
            src='./assets/constat/imaneConstat.png'
            alt='mains'
            className='img'
          />
        </div>
      </article>
      <article className='pagePhilo-content'>
        <p>
          La crise du Covid-19 a révélé les failles de notre système mondial.
          L’ensemble de l’humanité a pu réaliser la fragilité intrinsèque de
          notre organisation économique & sociale qui se fonde sur la recherche
          perpétuelle du profit et l’exploitation des ressources limitées de
          notre planète.
        </p>
        <p>
          Ce modèle économique paraît être menacé,{' '}
          <span className='bold'>
            il semble aujourd’hui plus que nécessaire de proposer une autre voie
          </span>
          , plus respectueuse des êtres qui peuplent la Terre.
        </p>
      </article>
      <article className='title-ambition-container'>
        <div className='title-container'>
          <img
            src='./assets/presentation/ambition.png'
            alt='notre ambition'
            className='img'
          />
        </div>
        <div className='picture-list'>
          <div className='culture-img-container'>
            <img
              src='./assets/constat/culturel.png'
              alt='culture'
              className='img'
            />
          </div>
          <div className='humanitaire-img-container'>
            <img
              src='./assets/constat/humanitaire.png'
              alt='humanitaire'
              className='img'
            />
          </div>
          <div className='animalier-img-container'>
            <img
              src='./assets/constat/animalier.png'
              alt='animalier'
              className='img'
            />
          </div>
          <div className='environnement-img-container'>
            <img
              src='./assets/constat/environnement.png'
              alt='environnement'
              className='img'
            />
          </div>
          <div className='medical-img-container'>
            <img
              src='./assets/constat/medical.png'
              alt='medical'
              className='img'
            />
          </div>
        </div>
      </article>
      <article className='pagePhilo-ambition'>
        <div className='pagePhilo-ambition-content'>
          <p>
            <span className='one4all-font purple'>#One4All</span> apporte une
            réponse durable pour agir concrètement sur l’ensemble des enjeux en
            proposant une alternative viable au système actuel.
          </p>
          <p>
            Partant du constat que tout est liée,{' '}
            <span className='one4all-font purple'>#One4All</span> délivre des
            solutions qui englobent les problèmes à{' '}
            <span className='bold'>360°</span> en les traitant le plus
            efficacement possible.
          </p>
          <p>L’organisation concentre ainsi ses actions dans cinq domaines :</p>
          <div className='pagePhilo-ambition-domain'>
            <img
              src='./assets/presentation/ih-ih01.png'
              alt='5 domaines'
              className='img'
            />
          </div>
          <p>
            Soutenir <span className='one4all-font purple'>#One4All</span>
          </p>
          <button className='btn'>Je participe</button>
        </div>
        <div className='fleurContainer'>
          <img
            src='./assets/presentation/Fleur.png'
            alt='Fleur 5 domaines'
            className='img'
          />
        </div>
      </article>
    </section>
  );
};

export default Philosophie;
