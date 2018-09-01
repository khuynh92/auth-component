import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../lib/store.js';

import Home from './home/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.js';
import SignUpForm from './sign-up/SignUpForm.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <React.Fragment>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/signup' component={SignUpForm}/>
          </React.Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}
