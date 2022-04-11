import React from 'react';

const Mouvement = () => {
  return (
    <section className='section-mouvement'>
      <h2 className='title-mouvement bold'>
        Le mouvement altruiste{' '}
        <span className='one4all-font purple'>#One4All</span>
      </h2>
      <article className='content'>
        <div className='text-mouvement'>
          <p>
            Le Mouvement Altruiste{' '}
            <span className='one4all-font purple'>#One4All</span> a pour but de
            fédérer tous les Hommes -{' '}
            <span className='purple bold'>
              indépendemment de leur religion, ethnie ou culture
            </span>{' '}
            qui adhèrent à l'idéologie de l'Altruisme.
          </p>
          <div className='img-fleur'>
            <img
              src='./assets/presentation/Fleur.png'
              alt='fleur des domaines'
              className='img'
            />
          </div>
        </div>
        <div className='domaines'>
          <p className='bold'>
            <span className='one4all-font purple'>#One4All</span> milite
            activement et mondialement dans plusieurs domaines:
          </p>
          <img
            src='./assets/presentation/5_domaines.png'
            alt='les cinq domaines'
            className='img'
          />
        </div>
      </article>
      <article className='objectifs'>
        <p>
          afin d'atteindre ses objectifs, le mouvement{' '}
          <span className='one4all-font purple'>#One4All</span> se construit
          grâce à la mise en commun de la culture, des connaissances, des
          ressources, et de la détermination de chaque militant où qu'il soit
          dans le monde.
        </p>
        <button className='btn'>nos missions</button>
      </article>
    </section>
  );
};

export default Mouvement;
