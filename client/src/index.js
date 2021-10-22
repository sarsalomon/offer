import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import UserShortener from './shortener/UserShortener';
export const Context = createContext(null)


ReactDOM.render(
  <Context.Provider value={{
    user: new UserShortener(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);