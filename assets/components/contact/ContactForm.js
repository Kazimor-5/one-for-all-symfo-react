import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const url = 'http://localhost:8000/api/contacts';

const ContactForm = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    object: '',
    text: '',
  });

  const reCaptchaRef = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = reCaptchaRef.current.executeAsync();

    try {
      await axios.post(url, {
        name: data.lastName,
        firstname: data.firstName,
        mail: data.email,
        objet: data.object,
        message: data.text,
      });
    } catch (error) {
      console.log(error.response);
    }
    setData({ firstName: '', lastName: '', email: '', object: '', text: '' });
  };

  return (
    <section className='section-contact-form'>
      <form onSubmit={handleSubmit} className='form'>
        <h2 className='title'>nous contacter</h2>
        <div className='form-row'>
          <label htmlFor='firstName' className='form-label'>
            Prénom:
          </label>
          <input
            required
            type='text'
            id='firstname'
            name='firstName'
            className='form-input'
            placeholder='Prénom'
            value={data.firstName}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>
            Nom:
          </label>
          <input
            required
            type='text'
            className='form-input'
            id='lastName'
            name='lastName'
            placeholder='Nom'
            value={data.lastName}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            required
            type='email'
            id='email'
            name='email'
            className='form-input'
            placeholder='Email'
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='object' className='form-label'>
            Objet du messsage:
          </label>
          <input
            required
            type='text'
            id='object'
            name='object'
            placeholder='Objet du message'
            value={data.object}
            onChange={handleChange}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <label htmlFor='text' className='form-label'>
            Message:
          </label>
          <textarea
            required
            name='text'
            id='text'
            className='form-textarea'
            placeholder='Entrez votre message ...'
            value={data.text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='form-row'>
          <ReCAPTCHA
            sitekey={process.env.PUBLIC_SITE_KEY}
            id='captcha'
            size='invisible'
            ref={reCaptchaRef}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Envoyer le message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
