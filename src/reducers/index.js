import { combineReducers } from 'redux'

import {
    ADD_POST,
    ADD_COMMENT,
    SET_CATEGORY
} from '../actions'

const initialPostState = {
    id: null,
    timestamp: 0,
    title: null,
    body: null,
    author: null,
    category: null,
    voteScore: 0,
    deleted: false
}

const initialCommentState = {
    id: null,
    parentId: null,
    timestamp: 0,
    body: null,
    author: null,
    voteScore: null,
    deleted: false,
    parentDeleted: false
}

const initialCategoryState = {
    name: null,
    url: null
}

function post (state = initialPostState, action) {
    switch (action.type) {
        case ADD_POST:
            return {...state}
        default:
            return state;
    }
}

function comment(state = initialCommentState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state}
        default:
            return state;
    }
}

function category(state = initialCategoryState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state}
        default:
            return state;
    }
}

export default combineReducers({post, comment, category})