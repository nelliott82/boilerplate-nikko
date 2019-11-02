import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom';
import store from './redux/store.js';
import TimeEntry from './timeEntry.js';
import Reports from './reports.js';
import '../public/index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <nav className="navbar">
            <a>Howdy!</a>
            <div id="navbarLinks">
              <Link to="/time-entry" className="links">Time Entry</Link>
              <Link to="/report" className="links">Reports</Link>
            </div>
          </nav>
        </div>
      </div>
      <Switch>
        <Route exact path="/time-entry">
          <TimeEntry />
        </Route>
        <Route exact path="/report">
          <Reports />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
