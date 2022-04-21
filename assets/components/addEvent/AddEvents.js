import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/api/events';

const AddEvents = () => {
  const [event, setEvent] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(url, {
        title: event.title,
        content: event.description,
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
    setEvent({
      title: '',
      description: '',
    });
  };

  return (
    <section className='section-addEvent'>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>ajouter un évènement</h2>
        <article className='form-row'>
          <label htmlFor='title' className='form-label'>
            Titre:
          </label>
          <input
            type='text'
            id='title'
            name='title'
            className='form-input'
            value={event.title}
            onChange={handleChange}
          />
        </article>
        <article className='form-row'>
          <label htmlFor='description' className='form-label'>
            Description de l'évènement:
          </label>
          <textarea
            name='description'
            id='description'
            className='form-textarea'
            value={event.description}
            onChange={handleChange}
          ></textarea>
        </article>
        <button className='btn btn-block'>ajouter l'évènement</button>
      </form>
    </section>
  );
};

export default AddEvents;
