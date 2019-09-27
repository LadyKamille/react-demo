import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import { PureInboxScreen } from './InboxScreen';
import { defaultTasks } from '../tasks/TaskList.stories';

const store = {
  getState: () => {
    return {
      tasks: {allTasks: defaultTasks},
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch'),
};

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(story => <Router>{story()}</Router>)
  .add('default', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error="Something" />);