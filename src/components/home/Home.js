import React, { Component, Fragment } from 'react';
import {  Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInThunk, logIn , signUpThunk} from '../../action/logIn-action.js';
import LogInForm from '../login/LogInForm.js';
class Home extends Component {
  componentDidMount() {
    if(localStorage && localStorage.token) {
      this.props.logIn();
    }
  }
  
  render() {
    return (
      <Fragment>
        {!this.props.isLoggedIn ? <LogInForm logIn={this.props.logInThunk} /> : <Redirect to={{pathname: '/dashboard'}}/>}
        <p>Don't have an account? <Link to='/signup'>Create an Account</Link></p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({ isLoggedIn: state.isLoggedIn });

const mapDispatchToProps = dispatch => ({
  logInThunk: user => dispatch(logInThunk(user)),
  logIn: user => dispatch(logIn(user)),
  signUpThunk: user => dispatch(signUpThunk(user)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);