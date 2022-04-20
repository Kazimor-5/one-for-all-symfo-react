import React, { useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/api/addEvent';

const AddEvents = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState();
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    // formData.append('file', file);
    // formData.append('fileName', file.name);
    formData.append('description', description);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
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
            className='form-input'
            onChange={(e) => setTitle(e.target.value)}
          />
        </article>
        <article className='form-row'>
          <label htmlFor='file' className='form-label'>
            Télecharger un fichier:
          </label>
          <input
            type='file'
            name='file'
            id='file'
            className='form-input'
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
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </article>
        <button className='btn btn-block'>ajouter l'évènement</button>
      </form>
    </section>
  );
};

export default AddEvents;
