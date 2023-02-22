import types from "../actions/types";

const initState = {
    isLoggedIn: false,
    token: null,
    msg: ''
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                token: action.data,
                msg: ''
            }
        case types.REGISTER_FAIL:
        case types.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                msg: action.data,
                token: null
            }
        case types.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                token: null,
                msg: ''
            }
        default:
            return state;
    }
}

export default authReducer