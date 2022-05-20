// ! FILES
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import AppProvider from './context';
import './styles/normalize.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
