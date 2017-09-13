export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const SET_CATEGORY = 'SET_CATEGORY'

export function addPost({id, timestamp, title, body, author, category, voteScore, deleted}) {
    return {
        type: ADD_POST,
        id,
        timestamp,
        title,
        body,
        author,
        category,
        voteScore,
        deleted
    }
}

export function addComment({id, parentId, timestamp, body, author, voteScore, deleted, parentDeleted}) {
    return {
        type: ADD_COMMENT,
        id,
        parentId,
        timestamp,
        body,
        author,
        voteScore,
        deleted,
        parentDeleted
    }
}

export function setCategories({name, url}) {
    return {
        type: SET_CATEGORY,
        name,
        url
    }
}