import { combineReducers } from 'redux'
import CategoriesReducer from './categories_reducer';
import CommentsReducer from './comments_reducer';
import PostsReducer from './posts_reducer';
import AppStateReducer from './app_state_reducer';

export default combineReducers({
    categories: CategoriesReducer,
    comments: CommentsReducer,
    posts: PostsReducer,
    appState: AppStateReducer
})