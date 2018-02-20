import axios from 'axios';
import { FETCH_USER, LOGOUT_USER, GET_EMAILS, GET_SINGLEREPORT, GET_DRAFTEMAILS, DELETE_EMAIL, GET_DRAFTEMAIL } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logoutUser = callback => async (dispatch) => {
  await axios.get('/api/log_out');
  dispatch({ type: LOGOUT_USER });
  callback();
};
export const handleToken = token => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};
export const sendEmail = (values, callback) => async (dispatch) => {
  const res = await axios.post('/api/response', values);
  dispatch({ type: FETCH_USER, payload: res.data });
  callback();
};

export const getEmails = (callback) => async (dispatch) => {
  const res = await axios.get('/api/emails');
  dispatch({ type: GET_EMAILS, payload: res.data });
  callback();
};
export const deleteEmail = (id, callback) => async (dispatch) => {
  await axios.post('/api/email/delete/', { id });
  dispatch({ type: DELETE_EMAIL, payload: id });
  callback();
}
export const getDraftEmails = (callback) => async (dispatch) => {
  const res = await axios.get('/api/emails/drafts');
  dispatch({ type: GET_DRAFTEMAILS, payload: res.data });
  callback();
};
export const getDraftEmail = (id) => async (dispatch) => {
  const res = await axios.get('/api/emails/drafts/' + id);
  let { title, subject, recipients, body } = res.data[0];
  let formattedRecipients = recipients.map((el) => el.email).join(',');
  let data = { title, subject, body, recipients: formattedRecipients };
  dispatch({ type: GET_DRAFTEMAIL, payload: data });
};
export const getSingleReport = (id, callback) => async (dispatch) => {
  const res = await axios.get('/api/email/' + id);
  dispatch({ type: GET_SINGLEREPORT, payload: res.data });
  callback();
};


