import * as ReadableAPI from '../utils/ReadableAPI'
import { 
    FETCH_CATEGORIES,
    LOADING,
    FETCH_POSTS,
    GET_POST_DETAIL,
    FETCH_COMMENTS_BY_POST_ID
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
            type: LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_POSTS,
            posts: data
        })

        dispatch({
            type: LOADING,
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

export const getPostDetail = (id) => dispatch => (
    ReadableAPI.getPostDetail(id).then(({data}) => {
        dispatch({
            type: LOADING,
            loading: true
        })

        dispatch({
            type: GET_POST_DETAIL,
            post: data
        })

        dispatch({
            type: LOADING,
            loading: false
        })
    })
)

// Comments
export const fetchCommentsByPostId = (id) => dispatch => (
    ReadableAPI.fetchCommentsByPostId(id).then(({data}) => {
        dispatch({
            type: LOADING,
            loading: true
        })

        dispatch({
            type: FETCH_COMMENTS_BY_POST_ID,
            postId: id,
            comments: data
        })

        dispatch({
            type: LOADING,
            loading: false
        })
    })
)