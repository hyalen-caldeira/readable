import * as ReadableAPI from '../utils/ReadableAPI'
import { 
    STATE_LOADING,
    STATE_POST_ORDER,
    FETCH_POSTS,
    FETCH_POSTS_BY_CATEGORY_ID,
    FETCH_POST_DETAIL,
    FETCH_COMMENTS_BY_POST_ID,
    FETCH_CATEGORIES
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