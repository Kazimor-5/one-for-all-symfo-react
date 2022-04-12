import React from 'react';

const Reseau = () => {
  return (
    <section className='section-reseau'>
      <article className='reseau-title'>
        <img
          src='./assets/reseau/reseau-700x211.png'
          alt='titre notre réseau'
          className='img'
        />
      </article>
      <article className='reseau-content'>
        <div className='earth-container'>
          <img src='assets/reseau/planet.png' alt='panète' className='img' />
        </div>
        <div className='reseau-text'>
          <p>
            <span className='one4all-font purple bold'>#One4All</span> à pour
            objectif de{' '}
            <span className='purple bold'>s'implanter dans 165 pays</span> afin
            de développer le système ALtruiste à l'échelle planétaire
          </p>
          <p className='increase'>
            <span className='one4all-font purple bold'>#One4All</span> dans le
            monde c'est:
          </p>
          <article className='compteur'>
            {/* losange container */}
            <div className='container-losange'>
              {/* 1er losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>850</h4>
                  <p>Adhérents</p>
                </div>
              </div>
              {/* fin 1er */}
              {/* 2ème losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>135</h4>
                  <p>Comités locaux</p>
                </div>
              </div>
              {/* fin 2ème */}
              {/* 3ème losange */}
              <div className='containerDecompte'>
                <div className='losange'></div>
                <div className='text-losange'>
                  <h4>165</h4>
                  <p>Pays implantés</p>
                </div>
              </div>
              {/* fin 3ème */}
            </div>
            {/* fin losange container */}
          </article>
        </div>
        <button className='btn blue'>adhérer / rejoindre</button>
      </article>
    </section>
  );
};

export default Reseau;
