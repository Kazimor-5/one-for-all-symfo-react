import React from 'react';
import './home.css';
import Widget from '../components/widgets/Widget';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home() {
  return (
    <div className='home'>
      <div className='homeWidgets'>
        <Sidebar />
        <Widget />
      </div>
    </div>
  );
}
