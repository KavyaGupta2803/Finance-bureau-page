// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';  // Make sure this is the correct path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
