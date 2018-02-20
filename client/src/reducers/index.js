import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import emailsReducer from './emailsReducer';
import singleReportReducer from './singleReportReducer';
import draftEmailsReducer from './draftEmailsReducer';
import draftEmailReducer from './draftEmailReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  emails: emailsReducer,
  singleReport: singleReportReducer,
  draftEmails: draftEmailsReducer,
  singleDraft: draftEmailReducer
});
