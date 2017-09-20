import * as ReadableAPI from '../utils/ReadableAPI'
import { 
    FETCH_CATEGORIES,
    LOADING,
    FETCH_POSTS } from './types'

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

export const fetchPosts = () => dispatch => (
    ReadableAPI.fetchPosts().then(({data}) => {
        dispatch(({
            type: LOADING,
            loading: true
        }))

        dispatch({
            type: FETCH_POSTS,
            posts: data
        })

        dispatch(({
            type: LOADING,
            loading: false
        }))
    })
)