// ! FILES
import React, { useState } from 'react';
import { faq } from '../data';
import { FaChevronLeft } from 'react-icons/fa';

const Faq = () => {
  const [tabs, setTabs] = useState(faq);
  const [index, setIndex] = useState(0);
  const [isShowed, setIsShowed] = useState(false);

  const handleShow = () => {};

  return (
    <section className='section-faq'>
      <article className='faq-header'>
        <img
          src='./assets/faq/Slide-FAQ.png'
          alt='planète terre'
          className='img'
        />
      </article>
      <h2 className='title bold'>frequently asked questions</h2>
      <article className='question-grid'>
        {tabs.map((tab) => {
          const { question, answer, id } = tab;

          return (
            <div key={id} className='question-block'>
              <div className='question'>
                <p className='bold'>{question}</p>
                <button className='btn' onClick={handleShow}>
                  <FaChevronLeft />
                </button>
              </div>
              <div className='answer'>
                <p dangerouslySetInnerHTML={{ __html: answer }}></p>
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Faq;
