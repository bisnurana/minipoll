import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import Main from './Main';
import * as actions from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (<BrowserRouter>
      <div>
        <NavBar />
        <Main />
      </div>
    </BrowserRouter>);
  }
}

export default connect(null, actions)(App);
