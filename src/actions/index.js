import * as ReadableAPI from '../utils/ReadableAPI'
import { 
    STATE_LOADING,
    STATE_POST_ORDER,
    FETCH_POSTS,
    FETCH_POSTS_BY_CATEGORY_ID,
    FETCH_POST_DETAIL,
    VOTE_POST,
    DELETE_POST,
    FETCH_COMMENTS_BY_POST_ID,
    VOTE_COMMENT,
    DELETE_COMMENT,
    FETCH_CATEGORIES,
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