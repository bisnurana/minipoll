import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
const fields = [{ label: 'Email Title', name: 'title' },
{ label: 'Email Recipients', name: 'recipients' },
{ label: 'Email Subject', name: 'subject' },
{ label: 'Email Body', name: 'body' }
];
const MailUpdate = ({ onFormBack, formValues, sendEmail, history, saveDraft, draftId }) => {
    const reviewFields = fields.map((field, index) => (<div key={index} className="my-1"><label className="form-label">{field.label}:</label><br />
        <span>{formValues[field.name]}</span><br /></div>));
    return (<div className="py-2">
        <h2 className="green-text center">Update . Review & send</h2><br /> <br />
        <div className="text-prewrap">
            {reviewFields}
        </div>
        <div className="my-2">
            <button className="btn grey mr-1" onClick={onFormBack} >Previous</button>
            <button className="btn blue" onClick={() => saveDraft(formValues, draftId, () => history.push('/mails/drafts'))} type="button">Save and exit</button>
            <button className="btn green right" onClick={() => sendEmail(formValues, draftId, () => history.push('/dashboard'))}>Send</button>
        </div>
    </div >);
}
function mapStateToProps(state) {
    return {
        formValues: state.form.updateForm.values
    };
};
export default connect(mapStateToProps, actions)(MailUpdate);