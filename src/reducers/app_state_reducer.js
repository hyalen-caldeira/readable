import { 
    STATE_LOADING,
    STATE_POST_ORDER
} from '../actions/types';

const initialStateLoading = {
    loading: false,
    openModal: false
}

export const stateLoadingReducer = (state=initialStateLoading, action) => {
    switch (action.type) {
        case STATE_LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}

const initialStatePostOrder = 'voteScore'

export const statePostOrder = (state=initialStatePostOrder, action) => {
    switch (action.type) {
        case STATE_POST_ORDER:
            return action.postOrder
        default:
            return state
    }
}