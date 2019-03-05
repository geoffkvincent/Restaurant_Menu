import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import {Menu} from 'semantic-ui-react'

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

const NavBar = ({ history }) => (
  <Menu>
    <Menu.Item>
      <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink activeStyle={styles.active} to="/about">About</NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
    </Menu.Item>
  </Menu>
)

export default withRouter(NavBar);