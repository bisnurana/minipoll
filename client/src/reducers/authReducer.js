import { FETCH_USER, LOGOUT_USER } from '../actions/types';
let defaultState = { credits: 0, googleID: null };
export default function (state = defaultState, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false;
    case LOGOUT_USER:
      return false;
    default:
      return state;
  }
}
