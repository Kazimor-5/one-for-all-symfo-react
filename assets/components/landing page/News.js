// ! FILES
import React from 'react';
import { news } from '../../data';

const News = () => {
  return (
    <section className='section-news'>
      <article className='news-title'>
        <h2 className='bold'>nos news</h2>
      </article>
      <article className='news-container'>
        {news.map((item) => {
          const {
            id,
            bgImage,
            logo,
            title,
            date,
            desc,
            anchor,
            text,
            icon,
            network,
          } = item;

          return (
            <div key={id} className='card'>
              <div className='bg-container'>
                <img src={bgImage} alt='card background' className='img' />
              </div>
              <div className='card-title'>
                <div className='logo-container'>
                  <img src={logo} alt='logo' className='img' />
                </div>
                <div className='header'>
                  <p>{title}</p>
                  <p className='date'>{date}</p>
                </div>
              </div>
              <p className='description'>
                {desc}{' '}
                <a className='bold' href={anchor}>
                  {text}
                </a>
              </p>
              <div className={`icon-container ${network}`}>{icon}</div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default News;
