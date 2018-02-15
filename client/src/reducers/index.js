import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import emailsReducer from './emailsReducer';
import singleReportReducer from './singleReportReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  emails: emailsReducer,
  singleReport: singleReportReducer
});
