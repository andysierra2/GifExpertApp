import React from 'react';
//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import GifExpertApp from './pages/GifExpertApp/GifExpertApp';
//import App from './App';

// @Deprecated
/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GifExpertApp />
);