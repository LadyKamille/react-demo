import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Layout } from 'antd';

import Home from './home/Home';
import Favorites from './favorites/Favorites';
import Inbox from './inbox/InboxScreen';
import Navigation from './navigation/Navigation';
import People from './people/People';

const App = () => (
  <Router>
    <Layout>
      <Navigation/>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/inbox" component={Inbox} />
    </Layout>
  </Router>
);

export default App;