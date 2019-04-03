import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import Calculator from './Calculator';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'black'}}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path='/calculator' component={Calculator} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser> 
      </div>
    );
  }
}

export default App;
