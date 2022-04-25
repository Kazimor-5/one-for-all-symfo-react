import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { faq } from '../data';

const Faq = () => {
  return (
    <section className='section-faq'>
      <h2 className='title'>frequently ask questions</h2>
      {faq.map((item) => {
        const { id, question, reponse, dataId } = item;

        return (
          <article key={id} className='question'>
            <p className='bold'>{question}</p>
            <button className='btn' id={dataId} data-id={dataId}>
              <FaChevronRight />
            </button>
            <div className='answer'>
              <p dangerouslySetInnerHTML={{ __html: reponse }}></p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Faq;
