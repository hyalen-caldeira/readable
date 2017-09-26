import axios from 'axios';

const api = "http://localhost:3001"

// Set authorization header
// Generate a unique token
let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

// Set the header values
const AUTH_HEADERS = {
    'Accept': 'application/json',
    'Authorization': token,
}

axios.defaults.headers.common['Authorization'] = AUTH_HEADERS;

// Categories
export const fetchCategories = () => (
    axios.get(`${api}/categories`)
)

// Posts
export const fetchPosts = () => (
    axios.get(`${api}/posts`)
)

// Post detail
export const getPostDetail = (id) => (
    axios.get(`${api}/posts/${id}`)
)

// Comments by post id
export const fetchCommentsByPostId = (id) => (
    axios.get(`${api}/posts/${id}/comments`)
)