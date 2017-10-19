import { combineReducers } from 'redux'
import CategoriesReducer from './categories_reducer';
import CommentsReducer from './comments_reducer';
import PostsReducer from './posts_reducer';
import ModalsReducer from './modals_reducer';
import { stateLoadingReducer, statePostOrder } from './app_state_reducer';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    categories: CategoriesReducer,
    comments: CommentsReducer,
    posts: PostsReducer,
    loading: stateLoadingReducer,
    order: statePostOrder,
    form: reduxFormReducer,
    modals: ModalsReducer
})