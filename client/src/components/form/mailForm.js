import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import formInput from './formInput';
import formTextarea from './formTextarea';
import validateRecipients from '../../helpers/validateRecipients';
class MailForm extends Component {
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
        const { reset, pristine, submitting, handleSubmit } = this.props;
        return (<div className="py-2">
            <h2 className="grey-text center"><span className="green-text">Create</span> . review & send</h2><br />
            <form onSubmit={handleSubmit(this.props.onFormSubmit)}>
                {this.renderFields()}
                {this.renderTextarea()}
                <div className="my-2">
                    <button className="btn" onClick={this.props.history.goBack}>Cancel</button>
                    <button className="btn orange" type="button" onClick={reset} disabled={pristine || submitting}>Clear</button>
                    <button className="btn green right" type="submit" disabled={pristine || submitting} >Next</button>
                </div>
            </form>
        </div>);
    }
}
const validate = values => {
    const errors = {};
    errors.recipients = validateRecipients(values.recipients || ' ');
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
export default reduxForm({ form: 'mailForm', validate, destroyOnUnmount: false })(MailForm);