import types from "./types"
import { apiGetPosts } from "../../services/post"

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