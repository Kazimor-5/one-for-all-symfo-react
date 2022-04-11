// ! COMPONENTS
import HeaderSlides from './HeaderSLides';
import HeaderButtons from './HeaderButtons';
// ! FILES
import React, { useState, useEffect } from 'react';
import { slides } from '../../data';

const HeaderSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > slides.length - 1) {
      setIndex(0);
    }

    if (index < 0) {
      setIndex(slides.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 7000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className='header-slider'>
      <article className='slider-container'>
        {slides.map((slide, i) => {
          let position = 'next-slide';

          if (i === index) {
            position = 'active-slide';
          }

          if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
            position = 'prev-slide';
          }

          return (
            <HeaderSlides key={slide.id} slide={slide} position={position} />
          );
        })}
      </article>
      <HeaderButtons setIndex={setIndex} />
    </section>
  );
};

export default HeaderSlider;
