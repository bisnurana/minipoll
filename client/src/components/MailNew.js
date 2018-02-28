import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MailForm from './form/mailForm';
import MailReview from './form/mailReview';


class MailNew extends Component {
  state = { reviewMail: false }
  render() {
    const review = this.state.reviewMail;
    return (
      <div>
        {review ?
          <MailReview history={this.props.history} onFormBack={() => this.setState({ reviewMail: false })} />
          :
          <MailForm history={this.props.history} onFormSubmit={() => this.setState({ reviewMail: true })} />
        }
      </div>
    );
  }
}

export default reduxForm({ form: 'mailFormNew', destroyOnUnmount: true })(MailNew);
