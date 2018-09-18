import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import NoMatch from './components/NoMatch'
import ProtectedRoute from './components/ProtectedRoute';


const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute path="/menu" component={Menu} />
      <ProtectedRoute path="/menus/:id" component={MenuItem} />
      <Route component={NoMatch} />
      
    </Switch>
  </Fragment>

);

export default App;