import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './redux/store.js';
import TimeEntry from './timeEntry.js';
import '../public/index.css';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <h1>Hello, world!</h1>
    </div>
    <TimeEntry />
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
