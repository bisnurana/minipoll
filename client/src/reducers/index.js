import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import emailsReducer from './emailsReducer';
import reportsReducer from './reportsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  emails: emailsReducer,
  reports: reportsReducer
});
