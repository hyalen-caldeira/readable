import _ from 'lodash';
import { 
    FETCH_COMMENTS_BY_POST_ID,
    VOTE_COMMENT,
    DELETE_COMMENT
} from '../actions/types';

const initialCommentsState = {}

export default function(state=initialCommentsState, action) {
    switch (action.type) {
        case FETCH_COMMENTS_BY_POST_ID:
            return {
                ...state,
                [action.postId]: _.mapKeys(action.comments, 'id')
            };
        case VOTE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {...state[action.comment.parentId],
                [action.comment.id]: {...action.comment}}
            }
        case DELETE_COMMENT:
            return {
                ...state,
                [action.comment.parentId]: {...state[action.comment.parentId],
                [action.comment.id]: {...action.comment, deleted: true}}
            }
        default:
            return state;
    }
}