import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import TopDiv from './TopDivApp';

ReactDOM.render(
  <Provider store={store}>
    <TopDiv />
  </Provider>,
  document.getElementById('root'),
);
