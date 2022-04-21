import React from 'react';
import { Link } from 'react-router-dom';

const GetSingleEvent = ({ id, title }) => {
  return (
    <article key={id} className='singleEvent'>
      <h3 className='title'>{title}</h3>
      <Link to={`/getEvent/${id.toString()}`} className='btn'>
        Détails de l'évènement
      </Link>
    </article>
  );
};

export default GetSingleEvent;
