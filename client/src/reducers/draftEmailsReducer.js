import { GET_DRAFTEMAILS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_DRAFTEMAILS:
            return action.payload;
        default:
            return state;
    }
};
