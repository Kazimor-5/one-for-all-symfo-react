import React from 'react';

const Histoire = () => {
  return (
    <section className='section-histoire'>
      <article className='histoire-title-container'>
        <img
          src='./assets/histoire/titre.png'
          alt='histoire du mouvement'
          className='img'
        />
      </article>
      <article className='samurai-container'>
        <div className='samurai-img-container'>
          <img
            src='./assets/histoire/samurai.png'
            alt='samurai'
            className='img samurai-img'
          />
        </div>
        <div className='samurai-text'>
          <p>
            Il y a <span className='one4all-font red'>30 ans</span>, un élève de
            CP à l’école du Mandinet en Île-de-France, exprimait devant sa
            classe son souhait de changer le monde, de stopper la maltraitance
            animale et d’éradiquer la famine. Un simple exercice qui consistait
            à illustrer le métier que chaque enfant désirait exercer à l’âge
            adulte... Devenu adulte,{' '}
            <span className='one4all-font red'>l’objectif</span> de cet enfant
            utopiste s’est renforcé et concrétisé au fil des épreuves
            rencontrées sur son parcours
          </p>
        </div>
      </article>
      <article className='hope'>
        <div className='hope-img-container'>
          <img
            src='./assets/histoire/parchemin copie.png'
            alt='hope'
            className='img'
          />
        </div>
        <div className='hope-text'>
          <div className='soleil-img-container'>
            <img
              src='assets/histoire/soleil rouge.png'
              alt='soleil rouge'
              className='img'
            />
          </div>
          <p>
            ...commence à fédérer les citoyens du monde et plus particulièrement
            les jeunes pour mettre en oeuvre son plan d'action à l'échelle
            planétaire. Cet illuminé réaliste, c’est Don Vebole, venez découvrir
            son histoire et son projet humanitaire au travers du Mouvement{' '}
            <span className='one4all-font red'>#One4All</span> ...
          </p>
          <button className='btn btn-red'>Découvrir</button>
        </div>
      </article>
    </section>
  );
};

export default Histoire;
