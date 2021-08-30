import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import toDoApp from './reducers';
import App from './App';

const store = createStore(toDoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);