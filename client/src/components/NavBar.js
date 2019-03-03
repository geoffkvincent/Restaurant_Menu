import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const styles = {
  active: {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: 'black',
  }
}

// const additionalLinks = (history) => {
//   if (isAuthenticated()) {
//     return (
//       <span>
//         <NavLink activeStyle={styles.active} to="/menu">Menu</NavLink>
//         {' '}
//         <a href="#" onClick={() => {
//           logout()
//           history.push("/login")
//         }}>
//           Logout
//         </a>
//       </span>
//     )
//   } else {
//     return (
//       <NavLink activeStyle={styles.active} to="/login">Login</NavLink>
//     )
//   }
// }

const NavBar = ({ history }) => (
  <nav>
    <NavLink exact activeStyle={styles.active} to="/">Home</NavLink>
     {' '}
    <NavLink activeStyle={styles.active} to="/about">About</NavLink>
     {' '}
     <NavLink activeStyle={styles.active} to="/about">Menu</NavLink>
  </nav>
)

export default withRouter(NavBar);