import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import MailForm from './form/mailForm';
import MailReview from './form/mailReview';


class MailNew extends Component {
  state = { reviewMail: false }
  renderForm() {
    if (this.state.reviewMail) {
      return <MailReview history={this.props.history} onFormBack={() => this.setState({ reviewMail: false })} />;
    }
    return <MailForm history={this.props.history} onFormSubmit={() => this.setState({ reviewMail: true })} />;
  }
  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    );
  }
}

export default reduxForm({ form: 'mailForm', destroyOnUnmount: true })(MailNew);
