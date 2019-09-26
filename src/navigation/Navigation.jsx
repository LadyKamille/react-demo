import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Navigation = () => (
  <Menu mode="horizontal">
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
);

export default Navigation;