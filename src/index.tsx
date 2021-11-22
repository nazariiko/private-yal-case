import React from 'react';
import RenderDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import './scss/index.scss';

import { store } from './redux/store';

RenderDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
