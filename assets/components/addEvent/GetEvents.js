// ! COMPONENTS
import GetSingleEvent from './GetSingleEvent';
// ! FILES
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/api/events';

const GetEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEvents = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      const data = response.data['hydra:member'];
      setEvents(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (isLoading) {
    return (
      <section className='loader'>
        <article className='loading'></article>
      </section>
    );
  }

  return (
    <section className='section-getEvent'>
      {events.map((event) => {
        return <GetSingleEvent key={event.id} {...event} />;
      })}
    </section>
  );
};

export default GetEvents;
