import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'https://api.graphcms.com/simple/v1/swapi'
});

const routing = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>
);

render(routing, document.getElementById('root'));
