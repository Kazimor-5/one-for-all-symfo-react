// ! FILES
import React from 'react';
import { socialLinks, people } from '../../data';

const Communaute = () => {
  return (
    <section className='section-communaute'>
      <article className='communaute-title'>
        <img
          src='./assets/reseau/une_communaute_inter.png'
          alt='communauté titre'
          className='img'
        />
      </article>
      <article className='communaute-content'>
        <div className='communaute-text'>
          <p className='communaute purple bold'>rejoins notre communauté !</p>
          <p>
            <span className='purple'>De nombreuses personnes</span> à travers le
            monde se lèvent et marchent ensemble dans le but de faire émerger le
            Mouvement <span className='one4all-font bold purple'>#One4All</span>{' '}
            et relayer le message de la philosophie Altruiste au plus grand
            nombre.
          </p>
          <p>
            Rejoignez une communauté internationale et{' '}
            <span className='purple'>diffusez le message de</span>{' '}
            <span className='one4all-font purple'>#One4All</span> à travers le
            monde.
          </p>
        </div>
        <div className='communaute-links'>
          <p>rejoins la communauté</p>
          <p>&amp;</p>
          <p>change le monde</p>
          <ul className='social-links'>
            {socialLinks.map((link) => {
              const { id, src, anchor } = link;
              return (
                <li key={id} className='social-link'>
                  <a href={anchor}>{src}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </article>
      <article className='communaute-grid'>
        {people.map((person) => {
          const { id, name, src } = person;

          return (
            <div key={id} className='cell'>
              <div className='cell-img-container'>
                <img src={src} alt={name} className='img' />
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Communaute;
