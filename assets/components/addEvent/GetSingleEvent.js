import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';

const url = 'http://localhost:8000/api/events/';

const GetSingleEvent = ({ id, title, events, setEvents }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${url}${id}`);

      const newEvent = events.filter((event) => event.id !== id);
      setEvents(newEvent);
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };

  return (
    <article key={id} className='singleEvent'>
      <h3 className='title'>{title}</h3>
      <Link to={`/getEvent/${id}`} className='btn'>
        détails de l'évènement
      </Link>
      <Link to={`/editEvent/${id}`} className='btn btn-edit'>
        <FaPencilAlt /> modifier l'évènement
      </Link>
      <button className='btn btn-delete' onClick={() => handleDelete(id)}>
        <FaTrashAlt /> supprimer l'évènement
      </button>
    </article>
  );
};

export default GetSingleEvent;
