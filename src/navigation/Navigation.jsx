import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

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
    return (
      <Header>
        <Menu
          mode="horizontal"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '64px' }}
          theme="dark"
        >
          <Menu.Item key="home">
            <Link href="/" to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="people">
            <Link href="/" to="/people">People</Link>
          </Menu.Item>
          <Menu.Item key="favorites">
            <Link href="/" to="/favorites">Favorites</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}

export default withRouter(Navigation);