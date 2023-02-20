import App from './app/app';
import './i18n';
import 'config/config';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import ReactDOM from 'react-dom';
import React from 'react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
