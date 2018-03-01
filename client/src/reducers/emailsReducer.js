import { GET_EMAILS, DELETE_EMAIL } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_EMAILS:
            return action.payload;
        case DELETE_EMAIL:
            return state.filter(email => email._id !== action.payload);
        default:
            return state;
    }
};
