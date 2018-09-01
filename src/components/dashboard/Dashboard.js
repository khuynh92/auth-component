import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOutThunk } from '../../action/logIn-action.js';
import Auth from '../auth/Auth.js';

class Dashboard extends Component {
  render() {
    return (
      this.props.isLoggedIn ? <DashboardContent logOutThunk={this.props.logOutThunk} /> : <Redirect to={{ pathname: '/' }} />
    );
  }
}

const DashboardContent = (props) => {
  return (
    <Fragment>
      <h2>Welcome to the Dashboard!</h2>
      <Auth capabilities='read'>
        <p>Can read</p>
      </Auth>
      <Auth capabilities='update'>
        <p>Can update</p>
      </Auth>
      <Auth capabilities='create'>
        <p>Can create</p>
      </Auth>
      <Auth capabilities='delete'>
        <p>Can delete</p>
      </Auth>
      <button onClick={props.logOutThunk}>Sign Out</button>
    </Fragment>
  );
};

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = dispatch => ({
  logOutThunk: user => dispatch(logOutThunk(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);