import _ from 'lodash';
import { 
    FETCH_COMMENTS_BY_POST_ID
} from '../actions/types';

const initialCommentsState = {}

export default function(state=initialCommentsState, action) {
    switch (action.type) {
        case FETCH_COMMENTS_BY_POST_ID:
            return {
                ...state,
                [action.postId]: _.mapKeys(action.comments, 'id')
            };
        default:
            return state;
    }
}