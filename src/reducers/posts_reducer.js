import _ from 'lodash';
import { 
    FETCH_POSTS, 
    FETCH_POSTS_BY_CATEGORY_ID,
    FETCH_POST_DETAIL,
    VOTE_POST,
    DELETE_POST
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
            console.log('Dentro de Post Reducer - action.id', action.id)
            console.log('Dentro de Post Reducer', {...state,
                [action.id]: {...state[action.id],
                  deleted: true }})
            console.log('Dentro de Post Reducer - action.postId', action.postId)
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    deleted: true }
            };
        default:
            return state;
    }
}