import React, { Component } from 'react';
import { Typography } from 'antd';

import PeopleHook from './PeopleHook';
import Navigation from '../navigation/Navigation';

export default class People extends Component {
  render() {
    const { Title } = Typography;

    return (
      <div>
        <Navigation/>
        <Title>Star Wars Characters</Title>
        <PeopleHook/>
      </div>
    );
  }
}
