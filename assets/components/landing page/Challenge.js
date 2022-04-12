import React from 'react';

const Challenge = () => {
  return (
    <section className='section-challenge'>
      <article className='challenge-title'>
        <h2 className='bold'>Challenge #JeSuisOne4All</h2>
      </article>
      <article className='challenge-content'>
        <div className='challenge-img-container'>
          <img
            src='./assets/je_suis_one_for_all/map.png'
            alt='carte challenge'
            className='img'
          />
          <img
            src='./assets/je_suis_one_for_all/je_suis_one4all.png'
            alt='#JeSuisOne4All'
            className='img'
          />
        </div>
        <div className='challenge-text'>
          <p className='event bold purple'>un évènement historique</p>
          <p>
            <span className='bold'>
              Le Mouvement{' '}
              <span className='one4all-font bold purple'>#One4All</span>
            </span>{' '}
            lance un appel international à la solidarité au travers de
            l'opération{' '}
            <span className='one4all-font bold purple'>#JeSuisOne4All</span>{' '}
            pour venir en aide à toutes les personnes, structures sociales,
            médicales où qu'elles se trouvent dans le monde
          </p>
          <p>
            La solidarité est un challenge. Regarder en direction des autres et
            le premier pas sur la Voie de l'ALtruisme !
          </p>
          <button className='btn'>je participe</button>
        </div>
      </article>
    </section>
  );
};

export default Challenge;
