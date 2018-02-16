import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const fields = [{ label: 'Email Title', name: 'title' },
{ label: 'Email Recipients', name: 'recipients' },
{ label: 'Email Subject', name: 'subject' },
{ label: 'Email Body', name: 'body' }
];
const MailReview = ({ onFormBack, formValues, sendEmail, history }) => {
    const reviewFields = fields.map((field, index) => (<div key={index} className="my-1"><label className="form-label">{field.label}:</label><br />
        <span>{formValues[field.name]}</span><br /></div>));
    return (<div className="py-2">
        <h2 className="green-text center">Create . review & send</h2><br /> <br />
        <div className="text-prewrap">
            {reviewFields}
        </div>
        <div className="my-2">
            <button className="btn blue" onClick={onFormBack} >Previous</button>
            <button className="btn green right" onClick={() => sendEmail(formValues, () => history.push('/dashboard'))}>Send</button>
        </div>
    </div >);
}
function mapStateToProps(state) {
    return {
        formValues: state.form.mailForm.values
    };
};
export default connect(mapStateToProps, actions)(MailReview);