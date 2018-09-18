import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import Menu from './components/Menu';
import NoMatch from './components/NoMatch'

const App = () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      
      <Route exact path="/menu" component={Menu} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>

);

export default App;