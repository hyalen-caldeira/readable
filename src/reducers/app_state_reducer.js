import { LOADING } from '../actions/types';

const initialAppState = {
    loading: false,
    openModal: false
}

export default function(state=initialAppState, action) {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}