// ! COMPONENTS
import EvenementSlides from './EvenementSlides';
// ! FILES
import React, { useState, useEffect } from 'react';
import { evenementSlides } from '../../data';

const EvenementSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > evenementSlides.length - 1) {
      setIndex(0);
    }

    if (index < 0) {
      setIndex(evenementSlides.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='evenement-slider'>
      <article className='event-slider-container'>
        {evenementSlides.map((slide, i) => {
          let position = 'next-slide';

          if (i === index) {
            position = 'active-slide';
          }

          if (
            i === index - 1 ||
            (index === 0 && i === evenementSlides.length - 1)
          ) {
            position = 'prev-slide';
          }

          return (
            <EvenementSlides key={slide.id} slide={slide} position={position} />
          );
        })}
      </article>
    </section>
  );
};

export default EvenementSlider;
