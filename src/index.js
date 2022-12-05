import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, StoreContext } from './stores/store.js'
import PauseMenu from "./components/PauseMenu.js"
import Buttons from './components/Buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
      <div style={{height: "100vh"}}>
        <PauseMenu />
        <Buttons />
        <App />
      </div>
  </StoreContext.Provider>
);