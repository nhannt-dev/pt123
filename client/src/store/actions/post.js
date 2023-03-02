import types from "./types"
import { apiGetPosts, apiGetPostsLimit } from "../../services/post"

export const getPosts = () => async (dispatch) => {
    try {
        const response = await apiGetPosts()
        if (response?.data.err === 0) {
            dispatch({
                type: types.GET_POSTS,
                posts: response.data.response
            })
        } else {
            dispatch({
                type: types.GET_POSTS,
                msg: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: types.GET_POSTS,
            posts: null
        })
    }
}

export const getPostsLimit = (page) => async (dispatch) => {
    try {
        const response = await apiGetPostsLimit(page)
        if (response?.data.err === 0) {
            dispatch({
                type: types.GET_POSTS_LIMIT,
                posts: response.data.response?.rows,
                count: response.data.response?.count
            })
        }
    } catch (error) {
        
    }
}