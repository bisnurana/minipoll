import { GET_REPORTS } from '../actions/types';
export default function (state = [], actions) {
    switch (actions.payload) {
        case GET_REPORTS:
            return actions.payload;
        default:
            return state;
    }
}