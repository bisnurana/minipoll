import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}> <h2>TailMail</h2>
        <p>A simplistic and light-weight app to track your emails.</p>
        <br />
        <p>Sign up and get started for free.</p>
        <a className="btn-large waves-effect blue" href="/auth/google">Try now</a>
      </div >
    );
  }
}

export default Landing;
