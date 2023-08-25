// need to render the App component and attach it to the root DOM element of your HTML file. Here's the code you would typically have in your index.js:

import React from 'react';
// import { createRoot } from 'react-dom'; // Import createRoot
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

// Use createRoot instead of ReactDOM.render
const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <div className="container"> 
      <App />
    </div>
  </React.StrictMode>
);
