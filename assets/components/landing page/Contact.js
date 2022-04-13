// ! FILES
import React from 'react';
import { contact } from '../../data';

const Contact = () => {
  return (
    <section className='section-contact'>
      <article className='contact-grid'>
        {contact.map((item) => {
          const { id, question, cta, icon } = item;

          return (
            <div key={id} className='contact-cell'>
              <p>{question}</p>
              <button className='btn btn-grid'>
                {cta} <span className='contact-icon'>{icon}</span>
              </button>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Contact;
