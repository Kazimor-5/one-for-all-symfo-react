// ! FILES
import React, { useEffect } from 'react';
import { news } from '../../data';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const News = () => {
  const slideInRight = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInLeft = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInBottom = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  const slideInTop = (elem, delay, duration) => {
    gsap.fromTo(
      elem,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration || 0.3,
        delay: delay || 0.4,
        scrollTrigger: {
          trigger: elem,
          start: 'top bottom',
          end: 'bottom center',
        },
      }
    );
  };

  useEffect(() => {
    slideInTop('#news-title');
  }, []);

  useEffect(() => {
    slideInRight('#news-container');
  }, []);

  useEffect(() => {
    slideInRight('#ytb-1');
  }, []);

  useEffect(() => {
    slideInRight('#ytb-2');
  }, []);

  useEffect(() => {
    slideInRight('#insta-1');
  }, []);

  useEffect(() => {
    slideInRight('#insta-2');
  }, []);

  useEffect(() => {
    slideInRight('#facebook-1');
  }, []);

  useEffect(() => {
    slideInRight('#facebook-2');
  }, []);

  return (
    <section className='section-news'>
      <article id='news-title' className='news-title'>
        <h2 className='bold'>nos news</h2>
      </article>
      <article id='news-container' className='news-container'>
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
            idName,
          } = item;

          return (
            <div key={id} id={idName} className='card'>
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
