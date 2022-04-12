// ! FILES
import React from 'react';

const EvenementSlides = ({ slide, position }) => {
  const { id, name, src, anchor } = slide;

  return (
    <article key={id} className={`slide ${position}`}>
      <img src={src} alt={name} className='event-img slide-img' />
      <a href={anchor} className='slide-btn'>
        {name}
      </a>
    </article>
  );
};

export default EvenementSlides;
