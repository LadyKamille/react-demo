import React, { Component } from 'react';

import HomeHook from './HomeHook';
import Navigation from '../navigation/Navigation';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <HomeHook/>
      </div>
    );
  }
}