import * as ReadableAPI from '../utils/ReadableAPI'
import uuidv4 from 'uuid/v4'
import { 
    STATE_LOADING,
    STATE_POST_ORDER,
    FETCH_POSTS,
    FETCH_POSTS_BY_CATEGORY_ID,
    FETCH_POST_DETAIL,
    VOTE_POST,
    DELETE_POST,
    NEW_POST,
    UPDATE_POST,
    FETCH_COMMENTS_BY_POST_ID,
    VOTE_COMMENT,
    DELETE_COMMENT,
    UPDATE_COMMENT,
    NEW_COMMENT,
    FETCH_CATEGORIES,
    OPEN_MODAL,
    CLOSE_MODAL
 } from './types'

// Categories

// export function fetchCategories() {
//     return dispatch => { 
//         ReadableAPI.fetchCategories().then(({ data }) => {
//             dispatch({
//                 type: FETCH_CATEGORIES,
//                 categories: data.categories
//             })
//         })
//     }
// }

export const fetchCategories = () => dispatch => (
    ReadableAPI.fetchCategories().then(({ data }) => {
        dispatch({
            type: FETCH_CATEGORIES,
            categories: data.categories
        })
    })
)

// Posts
export const fetchPosts = () => dispatch => (
    ReadableAPI.fetchPosts().then(({data}) => {
        console.log('Dentro de action fetchPosts >>>>>>>>>', data)
        dispatch({
            type: STATE_LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_POSTS,
            posts: data
        })

        dispatch({
            type: STATE_LOADING,
            loading: false
        })

        for (let post of data) {
            ReadableAPI.fetchCommentsByPostId(post.id).then(({data}) => {
                dispatch({
                    type: FETCH_COMMENTS_BY_POST_ID,
                    postId: post.id,
                    comments: data
                })
            })
        }
    })
)

export const fetchPostDetail = (id) => dispatch => (
    ReadableAPI.getPostDetail(id).then(({data}) => {
        dispatch({
            type: STATE_LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_POST_DETAIL,
            post: data
        })

        dispatch({
            type: STATE_LOADING,
            loading: false
        })
    })
)

export const fetchPostsByCategoryId = (categoryId) => dispatch => (
    ReadableAPI.fetchPostsByCategoryId(categoryId).then(({data}) => {
        dispatch({
            type: STATE_LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_POSTS_BY_CATEGORY_ID,
            posts: data
        })

        dispatch({
            type: STATE_LOADING,
            loading: false
        })
    })
)

export const statePostOrder = (order) => dispatch => (
    dispatch({
        type: STATE_POST_ORDER,
        postOrder: order
    })
)

export const votePost = (postId, option) => dispatch => (
    ReadableAPI.votePost(postId, option).then(({data}) => {
        dispatch({
            type: VOTE_POST,
            post: data
        })
    })
)

export const deletePost = (postId) => dispatch => (
    ReadableAPI.deletePost(postId).then(({data}) => {
        dispatch({
            type: DELETE_POST,
            postId
        })
    })
)

export const newPost = (values) => {
    const { author, title, content, category } = values

    const data = {
        id : uuidv4(),
        timestamp : Date.now(),
        title,
        body : content,
        author,
        category
      }

    return dispatch => {
        ReadableAPI.newPost(data).then(({data}) => {
            dispatch({
                type: NEW_POST,
                data
            })
        })
    }
}

export function updatePost(postId, values, callback) {
    const { title, body } = values;
  
    const data = {
      title,
      body
    }
  
    return dispatch => {
        ReadableAPI.updatePost(postId, data).then(({data}) => {
            dispatch({
                type: UPDATE_POST,
                data
            })
        }).then(() => callback())
    }
}

// Comments
export const fetchCommentsByPostId = (id) => dispatch => (
    ReadableAPI.fetchCommentsByPostId(id).then(({data}) => {
        dispatch({
            type: STATE_LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_COMMENTS_BY_POST_ID,
            postId: id,
            comments: data
        })

        dispatch({
            type: STATE_LOADING,
            loading: false
        })
    })
)

export const voteComment = (commentId, option) => dispatch => (
    ReadableAPI.voteComment(commentId, option).then(({data}) => {
        dispatch({
            type: VOTE_COMMENT,
            comment: data
        })
    })
)

export const deleteComment = (commentId) => dispatch => (
    ReadableAPI.deleteComment(commentId).then(({data}) => {
        dispatch({
            type: DELETE_COMMENT,
            comment: data
        })
    })
)

export const updateComment = (commentId, values, callback) => dispatch => {
    const { body } = values

    const data = {
        body,
        date: Date.now()
    }

    ReadableAPI.updateComment(commentId, data).then(({data}) => {
        dispatch({
            type: UPDATE_COMMENT,
            data
        })
    }).then(() => callback())
}

export const newComment = (values, postId) => {
    const data = {
        id: uuidv4(),
        timestamp: Date.now(),
        body: values.content,
        author: values.author,
        parentId: postId
    }

    return dispatch => {
        ReadableAPI.newComment(data).then(({data}) => {
            dispatch({
                type: NEW_COMMENT,
                data
            })
        })
    }
}

// Modals

export function openModal(modal) {
    return {
      type: OPEN_MODAL,
      payload: modal
    }
}
  
export function closeModal(modal) {
    return {
      type: CLOSE_MODAL,
      payload: modal
    }
}