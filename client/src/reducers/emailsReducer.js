import { GET_EMAILS } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case GET_EMAILS:
            return action.payload;
        default:
            return state;
    }
};
