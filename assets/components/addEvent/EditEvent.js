// ! FILES
import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:8000/api/events/';

const EditEvent = () => {
  const [event, setEvent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { id } = useParams();

  const getSingleEvent = useCallback(async () => {
    setIsLoading(true);
    const response = await axios.get(`${url}${id}`);
    const { data } = response;
    setEvent(data);
    setTitle(data.title);
    setContent(data.content);
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    getSingleEvent();
  }, [getSingleEvent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        headers: { 'Content-Type': 'application/merge-patch+json' },
      };
      await axios.patch(`${url}${id}`, { title, content }, options);
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  if (isLoading) {
    return (
      <section className='loader'>
        <article className='loading'></article>
      </section>
    );
  }

  return (
    <section className='section-editEvent'>
      <Link to='/getEvents' className='btn'>
        retourner aux évènements
      </Link>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>modifier l'évènement</h2>
        <article className='form-row'>
          <label htmlFor='title' className='form-label'>
            Titre
          </label>
          <input
            className='form-input'
            type='text'
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </article>
        <article className='form-row'>
          <label htmlFor='content' className='form-label'></label>
          <textarea
            className='form-textarea'
            name='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </article>
        <button type='submit' className='btn btn-block'>
          Modifier l'évènement
        </button>
      </form>
    </section>
  );
};

export default EditEvent;
