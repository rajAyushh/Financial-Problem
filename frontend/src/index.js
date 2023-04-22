import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const bgDiv = document.createElement('div');
bgDiv.style.backgroundImage = 'url(image.jpg)';
bgDiv.style.position = 'fixed';
bgDiv.style.top = '0';
bgDiv.style.left = '0';
bgDiv.style.width = '100%';
bgDiv.style.height = '100%';
document.body.appendChild(bgDiv);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 
