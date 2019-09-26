import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';

import Home from './home/Home';
import People from './people/People';
import Favorites from './favorites/Favorites';

const App = () => (
  <Router>
    <Layout>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/favorites" component={Favorites} />
    </Layout>
  </Router>
);

export default App;