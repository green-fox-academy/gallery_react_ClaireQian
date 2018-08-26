import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GalleryApp from './GalleryApp';

ReactDOM.render(
  <Provider store={store}>
    <GalleryApp />
  </Provider>,
  document.getElementById('root'),
);
