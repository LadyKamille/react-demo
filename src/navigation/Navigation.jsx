import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import styles from './Navigation.module.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.getKeyFromLocation(),
    };
  }

  getKeyFromLocation() {
    let location = this.props.location.pathname.replace(/^\/+/, '');

    if (!location.length) {
      return 'home';
    } else {
      return location;
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    const { Header } = Layout;

    return (
      <Header>
        <Menu
          className={styles.menu}
          mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          theme="dark"
        >
          <Menu.Item key="home">
            <Link
              className={styles['menu-item-link']}
              href="/"
              to="/"
            >Home</Link>
          </Menu.Item>
          <Menu.Item key="people">
            <Link
              className={styles['menu-item-link']}
              href="/"
              to="/people"
            >People</Link>
          </Menu.Item>
          <Menu.Item key="favorites">
            <Link
              className={styles['menu-item-link']}
              href="/"
              to="/favorites"
            >Favorites</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(Navigation);