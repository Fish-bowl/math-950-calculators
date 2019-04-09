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
import Module5 from './Module5'
import Module6 from './Module6';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div style={{backgroundColor: 'black', height: '100%'}}>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Module5" component={Module5} />
            <Route exact path="/Module6" component={Module6} />
            <AuthRoute exact path="/login" component={Login} />
            <AuthRoute exact path="/register" component={Register} />
            <Route exact path='/calculator' component={Calculator} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
        <Footer />
      </div>
    );
  }
}

export default App;
