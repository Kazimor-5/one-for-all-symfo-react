// ! COMPONENTS
import GetSingleEvent from './GetSingleEvent';
// ! FILES
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <article className='getEvent-title'>
        <Link to='/addEvent' className='btn'>
          ajouter un évènement
        </Link>
        <h2 className='title'>liste des évènements</h2>
      </article>
      {events.length >= 1 ? (
        events.map((event) => {
          return (
            <GetSingleEvent
              key={event.id}
              {...event}
              events={events}
              setEvents={setEvents}
            />
          );
        })
      ) : (
        <h3 className='title empty'>il n'y a aucun évènements</h3>
      )}
    </section>
  );
};

export default GetEvents;
