import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripePayment from './StripePayment';

class NavBar extends Component {
  handleLogout() {
    this.props.logoutUser(() => { this.props.history.push('/'); });
  }
  render() {
    const { auth } = this.props;
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          {auth && [<StripePayment key={1} />, <li key={3} className="divider" />,
          <li key={2}><a onClick={() => this.handleLogout()}>Log out</a></li>]}
        </ul>
        <nav>
          <div className="nav-wrapper container">
            <Link to={auth ? '/dashboard' : '/'} className="brand-logo blue-text hide-on-med-and-down">TailMail</Link>
            <ul className="right">
              {auth ? [<li key={4}><Link to="/dashboard" className="nav-text">Dashboard</Link></li>,
              <li key={5}><Link to="/mails/drafts" className="nav-text">Draft</Link></li>,
              <li key={6}><Link to="/mails/create" className="nav-text">Create mail</Link></li>, <li className="text-credits orange-text" key={9}><i className="material-icons left mr-credits">account_balance_wallet</i><span>{this.props.auth.credits}</span></li>, <li key={7}><a className="dropdown-button" data-activates="dropdown1"><i className="material-icons blue-text"> apps</i></a></li>] : <li key={8}><a href="/auth/google">Log in</a></li>}
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
