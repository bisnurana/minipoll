import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NavBar extends Component {
  handleLogout() {
    this.props.logoutUser(() => { this.props.history.push('/'); });
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          {auth ? [<li><Link to="/">Buy credit</Link></li>,
            <li><a onClick={() => this.handleLogout()}>Log out</a></li>] : ''}

        </ul>
        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">TailMail</a>
            <ul className="right">
              {auth ? [<li><Link to="/mails" className="nav-text">All mails</Link></li>,
                <li><Link to="/mails/reports" className="nav-text">Reports</Link></li>,
                <li><Link to="/mail/create" className="nav-text">Create mail</Link></li>, <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Credits(2)<i className="material-icons right"> account_circle</i></a></li>] : <li><a href="/auth/google">Log in</a></li>}
            </ul>
          </div>
        </nav>
      </div >
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps, actions)(withRouter(NavBar));
