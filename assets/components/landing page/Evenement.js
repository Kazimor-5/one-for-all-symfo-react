// ! COMPONENTS
import EvenementSlider from './EvenementSlider';

// ! FILES
import React from 'react';

const Evenement = () => {
  return (
    <section className='section-evenement'>
      <article className='evenement-title'>
        <p className='bold purple'>experience more</p>
        <h2 className='bold'>nos évènements, une expérience altruiste</h2>
      </article>
      <article className='evenement-content'>
        <p>
          <span className='one4all-font purple'>#One4All</span> se veut être un
          mouvement fédérateur à fort potentiel de communication
        </p>
        <p>
          Pour réussir à porter notre message, mener nos actions et fédérer dans
          chaque pays, régions ou ville du monde, nous misons sur différents
          types d'évènements... Venez les découvrir !
        </p>
        <div className='evenement-img-container'>
          <img
            src='./assets/evenement/Slide-events.png'
            alt='évènements #One4All'
            className='img'
          />
        </div>
        <button className='btn'>nos évènements</button>
      </article>
      <EvenementSlider />
    </section>
  );
};

export default Evenement;
