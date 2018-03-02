import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import formInput from './formInput';
import formTextarea from './formTextarea';
import validateRecipients from '../../helpers/validateRecipients';
import * as actions from '../../actions';
class UpdateForm extends Component {
    componentDidMount() {
        this.props.getDraftEmail(this.props.draftId);
    }
    renderFields() {
        return (<div>
            <Field type="text" name="title" label="Email Title:" component={formInput} />
            <Field type="text" name="recipients" label="Recipient/s:" placeholder="john@mailtail.com,sally@gmail.com" component={formInput} />
            <Field type="text" name="subject" label="Email Subject:" component={formInput} />
        </div>);
    }
    renderTextarea() {
        return (<div>
            <Field type="text" name="body" label="Email Body:" component={formTextarea} />
        </div>)
    }
    render() {
        const { handleSubmit } = this.props;
        return (<div className="py-2 col s12 m10 l10 push-m1 push-l1">
            <h2 className="grey-text center"><span className="green-text">Update</span> . Review & send</h2><br />
            <form onSubmit={handleSubmit(this.props.onFormSubmit)}>
                {this.renderFields()}
                {this.renderTextarea()}
                <div className="my-2">
                    <button className="btn grey" onClick={this.props.history.goBack}>Cancel</button>
                    <button className="btn green right">Next</button>
                </div>
            </form>
        </div>);
    }
}
const validate = (values, props) => {
    const errors = {};
    let credits = props.auth.credits;
    let recipientsCount = values.recipients ? values.recipients.split(',').length : 0;
    errors.recipients = validateRecipients(values.recipients || '', recipientsCount, credits);
    if (!values.title) {
        errors.title = "Please provide an email title";
    }
    if (!values.subject) {
        errors.subject = "Please provide a subject";
    }
    if (!values.recipients) {
        errors.recipients = "Please provide atleast one recipient";
    }
    if (!values.body) {
        errors.body = "Please write your message";
    }

    return errors;
}
function mapStateToProps(state) {

    return {
        auth: state.auth,
        initialValues: state.singleDraft
    }
}
UpdateForm = reduxForm({ form: 'updateForm', validate, destroyOnUnmount: false, enableReinitialize: true })(UpdateForm);
UpdateForm = connect(mapStateToProps, actions)(UpdateForm);
export default UpdateForm;
