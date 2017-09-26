import _ from 'lodash';
import { FETCH_CATEGORIES } from '../actions/types';

const initialCategoriesState = {}

export default function(state=initialCategoriesState, action) {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return _.mapKeys(action.categories, 'name');
        default:
            return state;
    }
}