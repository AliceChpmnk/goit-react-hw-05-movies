import { App } from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter
    // перед вивантаженням на гітхаб
    // basename="/goit-react-homework-05/"
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
