import React, { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLasteName] = useState('');
  const [email, setEmail] = useState('');
  const [motif, setMotif] = useState('');
  const [object, setObject] = useState('');
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const reCaptchaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && lastName && email && motif && object && text) {
      const message = {
        id: new Date().getTime().toString(),
        firstName,
        lastName,
        email,
        motif,
        object,
        text,
      };
      setMessages((item) => {
        return [...item, message];
      });
      setFirstName('');
      setLasteName('');
      setEmail('');
      setMotif('');
      setObject('');
      setText('');
    }
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
            className='form-input'
            placeholder='Prénom'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            placeholder='Nom'
            value={lastName}
            onChange={(e) => setLasteName(e.target.value)}
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
            className='form-input'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form-row'>
          <label htmlFor='motif' className='form-label'>
            Motif
          </label>
          <select
            required
            name='motif'
            id='motif'
            className='motif'
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
          >
            <option value=''>Choisir un motif de message</option>
            <option value='relation de presse'>Relation de presse</option>
            <option value='recrutement'>Recrutement</option>
          </select>
        </div>
        <div className='form-row'>
          <label htmlFor='objet' className='form-label'></label>
          <input
            type='text'
            id='objet'
            placeholder='Objet du message'
            value={object}
            onChange={(e) => setObject(e.target.value)}
            className='form-input'
          />
        </div>
        <div className='form-row'>
          <textarea
            name=''
            id=''
            className='form-textarea'
            placeholder='Entrez votre message ...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
        </div>
        <div className='form-row'>
          <ReCAPTCHA
            ref={reCaptchaRef}
            sitekey={process.env.PUBLIC_SITE_KEY}
            id='captcha'
          />
        </div>
        <button type='submit' className='btn btn-block'>
          Envoyer le message
        </button>
      </form>
      {messages.map((message) => {
        const { id, firstName, lastName, email, motif, object, text } = message;

        return (
          <div key={id} className='item'>
            <h4>Prénom: {firstName}</h4>
            <h4>Nom: {lastName}</h4>
            <p>Email: {email}</p>
            <p>Motif: {motif}</p>
            <p>Objet: {object}</p>
            <p>Message: {text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ContactForm;
