// ! FILES
import React from 'react';

const HeaderSlides = ({ slide, position }) => {
  const { id, name, src, anchor } = slide;
  return (
    <article key={id} className={`slide ${position}`}>
      <img src={src} alt={name} className='slide-img' />
      <a href={anchor} className='slide-btn'>
        {name}
      </a>
    </article>
  );
};

export default HeaderSlides;
