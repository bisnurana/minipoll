import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripePayment extends Component {
  onToken = (token) => {
    console.log(token);
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
        <li key={1}><a>Buy credit</a></li>
      </StripeCheckout >
    );
  }
}

export default StripePayment;
