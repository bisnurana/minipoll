import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import UpdateForm from './form/updateForm';
import UpdateReview from './form/updateReview';


class UpdateDraft extends Component {
    state = { reviewMail: false }
    render() {
        const review = this.state.reviewMail;
        return (
            <div>
                {review ?
                    <UpdateReview history={this.props.history} draftId={this.props.match.params.id} onFormBack={() => this.setState({ reviewMail: false })} />
                    :
                    <UpdateForm history={this.props.history} draftId={this.props.match.params.id} onFormSubmit={() => this.setState({ reviewMail: true })} />
                }
            </div>
        );
    }
}

export default reduxForm({ form: 'mailForm', destroyOnUnmount: true })(UpdateDraft);
