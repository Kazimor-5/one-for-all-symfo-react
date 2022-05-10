// ! FILES
import React, { useState } from 'react';
import { navLinks } from '../data';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/normalize.css';
import '../styles/index.css';

const Navbar = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const showSidebar = () => {
    setIsShowSidebar(true);
  };

  const hideSidebar = () => {
    setIsShowSidebar(false);
  };

  return (
    <nav className={isShowSidebar ? 'hide-navbar' : 'navbar'}>
      <button
        onClick={() => showSidebar()}
        className={isShowSidebar ? 'close-sidebar-btn' : 'open-sidebar-btn'}
      >
        <FaBars /> menu
      </button>
      <ul className={isShowSidebar ? 'show-sidebar nav-links' : 'nav-links'}>
        <button onClick={() => hideSidebar()} className='close-sidebar-btn'>
          <FaTimes />
        </button>
        {navLinks.map((link) => {
          const { id, name, anchor, icon } = link;

          if (id === 6) {
            return (
              <li key={id} className='nav-btn'>
                <Link to='/' className='nav-btn'>
                  <img src={icon} alt={name} className='img ' />
                </Link>
              </li>
            );
          }

          if (id === 10) {
            return (
              <li key={id} className='nav-btn'>
                <button className='btn nav-btn'>
                  {icon} {name}
                </button>
              </li>
            );
          }

          if (id === 11) {
            return (
              <li key={id} className='nav-btn'>
                <button className='btn nav-btn red'>
                  {icon} {name}
                </button>
              </li>
            );
          }

          return (
            <li key={id} className='nav-btn'>
              <Link className='nav-btn' to={`/${name}`}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
