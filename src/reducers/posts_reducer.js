import _ from 'lodash';
import {FETCH_POSTS} from '../actions/types';

const initialPostsState = {}

export default function(state=initialPostsState, action) {
    switch (action.type) {
        case FETCH_POSTS:
        return {...state,
            ..._.mapKeys(action.posts, 'id')};
        default:
            return state;
    }
}