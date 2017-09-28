import _ from 'lodash';
import { 
    FETCH_POSTS, 
    GET_POST_DETAIL,
    FETCH_POSTS_BY_CATEGORY_ID
} from '../actions/types';

const initialPostsState = {}

export default function(state=initialPostsState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                ..._.mapKeys(action.posts, 'id')
            };
        case FETCH_POSTS_BY_CATEGORY_ID:
            console.log('<><><><><><><><> Estou dentro do Reducer ...')
            return _.mapKeys(action.posts, 'id');
        case GET_POST_DETAIL:
            return {
                ...state,
                [action.post.id] : {...action.post} 
            };
        default:
            return state;
    }
}