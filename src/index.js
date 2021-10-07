import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';

import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

import Details from './components/Details';
import LoginPage from './components/loginPage.js';


ReactDOM.render(
  <React.StrictMode>

    <Router>
    <Switch>

      <Route path='/' exact>
        <LoginPage/>
      </Route>

        <Route path='/details' exact>
        <Details />
      </Route>

        <Route>
          <div>404 : Page not Exists</div>
        </Route>
    </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
