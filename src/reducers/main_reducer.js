import { combineReducers } from 'redux'
import CategoriesReducer from './categories_reducer';
import CommentsReducer from './comments_reducer';
import PostsReducer from './posts_reducer';

const initialAppStates = {
    loading: false,
    openModal: false
}

export default combineReducers({
    categories: CategoriesReducer,
    comments: CommentsReducer,
    posts: PostsReducer
})