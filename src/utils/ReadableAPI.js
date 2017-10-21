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

// --------- Categories
// Fetch categories
export const fetchCategories = () => (
    axios.get(`${api}/categories`)
)

// --------- Posts
// Fetch posts
export const fetchPosts = () => (
    axios.get(`${api}/posts`)
)

// Post detail
export const getPostDetail = (id) => (
    axios.get(`${api}/posts/${id}`)
)

// Posts by category id
export const fetchPostsByCategoryId = (categoryId) => (
    axios.get(`${api}/${categoryId}/posts`)
)

// Vote post
export const votePost = (postId, option) => (
    axios.post(`${api}/posts/${postId}`, {option:option})
)

// Delete post
export const deletePost = postId => (
    axios.delete(`${api}/posts/${postId}`)
)

// New post
export const newPost = data => (
    axios.post(`${api}/posts`, data)
)

// Update post
export const updatePost = (postId, data) => (
    axios.put(`${api}/posts/${postId}`, data)
)

// --------- Comments
// Comments by post id
export const fetchCommentsByPostId = (id) => (
    axios.get(`${api}/posts/${id}/comments`)
)

// Vote comment
export const voteComment = (commentId, option) => (
    axios.post(`${api}/comments/${commentId}`, {option:option})
)

// Delete comment
export const deleteComment = commentId => (
    axios.delete(`${api}/comments/${commentId}`)
)

// Update comment
export const updateComment = (commentId, data) => (
    axios.put(`${api}/comments/${commentId}`, data)
)

// New comment
export const newComment = data => (
    axios.post(`${api}/comments`, data)
)