import _ from 'lodash';
import { 
    FETCH_POSTS, 
    GET_POST_DETAIL 
} from '../actions/types';

const initialPostsState = {}

export default function(state=initialPostsState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ..._.mapKeys(action.posts, 'id')
            };
        case GET_POST_DETAIL:
            return {
                ...state,
                [action.post.id] : {...action.post} 
            };
        default:
            return state;
    }
}