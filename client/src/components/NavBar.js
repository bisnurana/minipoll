import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Log in</a></li>
          <li className="divider" />
          <li><a href="#!">Buy credits</a></li>
          <li><a href="#!">Log out</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">Tail Mail</a>
            <ul className="right">
              <li><a href="">All Mails</a></li>
              <li><a href="">Reports</a></li>
              <li><a href="">Create Mail</a></li>
              <li><a href="">Credits</a></li>
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1"><i className="material-icons right"> account_circle arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
