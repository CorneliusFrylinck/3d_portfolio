import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, StoreContext } from './stores/store.js'
import PauseMenu from "./components/PauseMenu.js"
import MobileMovement from './components/MobileMovement';
import PauseButton from './components/PauseButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
      <div style={{height: "100vh"}}>
        <PauseMenu />
        <PauseButton />
        <MobileMovement />
        <App />
      </div>
  </StoreContext.Provider>
);