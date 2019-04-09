import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleLogout } from '../reducers/user';

class NavBar extends Component {
  rightNavs = () => {
    const { user, dispatch, history } = this.props;

    if (user.id) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='Logout'
            onClick={() => dispatch(handleLogout(history))}
          />
        </Menu.Menu>
      );
    }
    return (
      <Menu.Menu position="right">
        <Link to="/register">
          <Menu.Item name="Register" />
        </Link>
        <Link to="/login">
          <Menu.Item name="Login" />
        </Link>
      </Menu.Menu>
    );
  }

  render() {
    return (
      <div>
        <Menu inverted style={{display: 'flex', justifyContent: 'center'}} size='huge' pointing secondary>
          <Link to="/Module5">
            <Menu.Item style={styles.item} name="Module 5" />
          </Link>
          <Link to="/">
            <Menu.Item name='Home' />
          </Link>
          <Link to="/calculator">
            <Menu.Item name="Calculator" />
          </Link>
          <Link style={styles.item} to="/Module6">
            <Menu.Item name="Module 6" />
          </Link>
        </Menu>
      </div>
    );
  }
}

const styles = {
  item: {
    textAlign: 'center'
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

export default withRouter(connect(mapStateToProps)(NavBar));
