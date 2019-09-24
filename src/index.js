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
import Electric from './electric/electric';

import './index.css';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh/graphql'
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
            <NavLink activeClassName="active" to="/electric">
              Electric
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/electric" component={Electric} />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(routing, document.getElementById('root'));
