import React, { Component } from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions/index';

class StripePayment extends Component {
  onToken = (token) => {
    this.props.handleToken(token);
  }
  render() {
    return (
      <StripeCheckout
        name="Tail Mail"
        description="Top up your credit"
        token={this.onToken}
        stripeKey={process.env.REACT_APP_STRIPE_PK}
        amount={500}
      >
        <li><a>Buy credits</a></li>
      </StripeCheckout >
    );
  }
}

export default connect(null, actions)(StripePayment);
