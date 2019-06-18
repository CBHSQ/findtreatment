import React from 'react';
import ReactDOM from 'react-dom';
import './css/tailwind.css';
import ScrollToTop from './components/ScrollToTop';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={process.env.REACT_APP_FEDERALIST_BASEURL}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);
