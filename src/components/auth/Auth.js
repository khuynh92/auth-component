import React, { Component,Fragment } from 'react';

export default class Auth extends Component {
  render() {
    let userObj = localStorage && JSON.parse(localStorage.token).split('.')[1];
    let capabilities = JSON.parse(atob(userObj)).capabilities || ['read'];
    return (
      <Fragment>
        {capabilities.includes(this.props.capabilities) && this.props.children}
      </Fragment>
    );
  }
}