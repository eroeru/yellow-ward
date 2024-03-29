import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './tests/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(console.log);
