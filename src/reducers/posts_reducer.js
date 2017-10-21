import _ from 'lodash';
import { 
    FETCH_POSTS, 
    FETCH_POSTS_BY_CATEGORY_ID,
    FETCH_POST_DETAIL,
    VOTE_POST,
    DELETE_POST,
    NEW_POST,
    UPDATE_POST
} from '../actions/types';

const initialPostsState = {}

export default function(state=initialPostsState, action) {
    switch (action.type) {
        case FETCH_POSTS:
        console.log('Dentro de Post Reducer - Fetch', ...state)
            return {
                ...state,
                ..._.mapKeys(action.posts, 'id')
            };
        case FETCH_POSTS_BY_CATEGORY_ID:
            return _.mapKeys(action.posts, 'id');
        case FETCH_POST_DETAIL:
            return {
                ...state,
                [action.post.id] : {...action.post} 
            };
        case VOTE_POST:
            return {
                ...state,
                [action.post.id] : {...action.post}
            };
        case DELETE_POST:
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    deleted: true }
            };
        case NEW_POST:
            return {
                ...state,
                [action.data.id] : {...action.data}
            }
        case UPDATE_POST:
            return {
                ...state,
                [action.data.id]: action.data
            }
        default:
            return state;
    }
}