// ! COMPONENTS
import SoutiensSlides from './SoutiensSlides';
// ! FILES
import React, { useState, useEffect } from 'react';
import { soutiensSlides } from '../../data';

const SoutiensSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > soutiensSlides.length - 1) {
      setIndex(0);
    }

    if (index < 0) {
      setIndex(soutiensSlides.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='soutiens-slider'>
      <article className='soutiens-slider-container'>
        {soutiensSlides.map((slide, i) => {
          let position = 'next-slide';

          if (i === index) {
            position = 'active-slide';
          }

          if (
            i === index - 1 ||
            (index === 0 && i === soutiensSlides.length - 1)
          ) {
            position = 'prev-slide';
          }

          return (
            <SoutiensSlides key={slide.id} slide={slide} position={position} />
          );
        })}
      </article>
    </section>
  );
};

export default SoutiensSlider;
