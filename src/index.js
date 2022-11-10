import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { imageStore, ImageContext } from './stores/imageStore.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ImageContext.Provider value={imageStore}>
    <div style={{height: "100vh"}}>
      <App />
      <div className="dot" />
    </div>
  </ImageContext.Provider>
);