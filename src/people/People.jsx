import React, { Component } from 'react';

import PeopleHook from './PeopleHook';
import Navigation from '../navigation/Navigation';

export default class People extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <PeopleHook/>
      </div>
    );
  }
}
