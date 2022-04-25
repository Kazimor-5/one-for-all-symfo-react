//  ! FILES
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const url = 'http://localhost:8000/api/events/';

const Details = () => {
  const [singleEvent, setSingleEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const getSingleEvent = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(`${url}${id}`);
    const { data } = response;

    setSingleEvent(data);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getSingleEvent();
  }, [getSingleEvent]);

  if (isLoading) {
    return (
      <section className='loader'>
        <article className='loading'></article>
      </section>
    );
  }

  const { title, content } = singleEvent;

  return (
    <section className='section-details'>
      <Link to='/getEvents' className='btn'>
        Retourner aux évènements
      </Link>
      <article className='details'>
        <h1 className='title'>{title}</h1>
        <p>{content}</p>
      </article>
    </section>
  );
};

export default Details;
