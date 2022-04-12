// ! FILES
import React from 'react';

const SoutiensSlides = ({ slide, position }) => {
  const { id, name, src } = slide;

  return (
    <article key={id} className={`slide ${position}`}>
      <img src={src} alt={name} className='event-img slide-img' />
    </article>
  );
};

export default SoutiensSlides;
