// ! FILES
import React from 'react';
import { follow, navLinks } from '../../data';

const Footer = () => {
  return (
    <footer className='footer'>
      <article className='copyright'>
        <p>Copyright &copy; 2022.</p>
        <p>All Rights Reserved</p>
        <p>#One4All</p>
      </article>
      <article className='propos'>
        <h4>a propos</h4>
        <a href='#'>Mentions Légales</a>
        <a href='#'>FAQ</a>
        <a href='#'>Accueil</a>
      </article>
      <article className='follow'>
        <h4>follow</h4>
        {follow.map((item) => {
          const { id, icon, network, anchor } = item;

          return (
            <a key={id} href={anchor} className={`follow-anchor ${network}`}>
              <span className='follow-icon'>{icon}</span>
            </a>
          );
        })}
      </article>
      <article className='menu'>
        <h4>menu</h4>
        {navLinks.map((navLink) => {
          const { id, name, anchor } = navLink;

          if (id !== 6) {
            return (
              <a key={id} href={anchor}>
                {name}
              </a>
            );
          }
        })}
      </article>
    </footer>
  );
};

export default Footer;
