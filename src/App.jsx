import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './home/Home';
import People from './people/People';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/people" component={People} />
    </div>
  </Router>
);

export default App;