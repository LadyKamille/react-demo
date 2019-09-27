import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import TaskList from '../tasks/TaskList';
import './InboxScreen.css';

export function PureInboxScreen({ error }) {
  const { Content } = Layout;

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <Content className="content">
      <div className="page lists-show">
        <nav>
          <h1 className="title-page">
            <span className="title-wrapper">Taskbox</span>
          </h1>
        </nav>
        <TaskList />
      </div>
    </Content>
  );
}

PureInboxScreen.propTypes = {
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);