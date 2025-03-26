import React from 'react';
import ReactDOM from 'react-dom/client'; // Update the import
import './index.css'; // Optional, you can style it later
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
