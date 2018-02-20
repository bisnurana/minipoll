import { GET_DRAFTEMAIL } from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_DRAFTEMAIL:
            return action.payload;
        default:
            return state;
    }
};
