import types from '../actions/types'

const initState = {
    posts: [],
    msg: ''
}

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.posts || [],
                msg: action.msg || ''
            }
    
        default:
            return state;
    }
}

export default postReducer