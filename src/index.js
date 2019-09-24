import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import App from './App';
import People from './people/people';

import './index.css';

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi'
});

const routing = (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/people">
              People
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/people" component={People} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(routing, document.getElementById('root'));
