import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //컴포넌트들만 생략 가능.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
