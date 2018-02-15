import { GET_SINGLEREPORT } from '../actions/types';
export default function (state = {}, action) {
    switch (action.type) {
        case GET_SINGLEREPORT:
            return action.payload;
        default:
            return state;
    }
}