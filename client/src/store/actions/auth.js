import types from "./types";
import { apiRegister, apiLogin } from "../../services/auth";

export const register = (payload) => async (dispatch) => {
    try {
        const response = await apiRegister(payload)
        if (response?.data.err === 0) {
            dispatch({
                type: types.REGISTER_SUCCESS,
                data: response.data.token
            })
        } else {
            dispatch({
                type: types.REGISTER_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: types.REGISTER_FAIL,
            data: null
        })
    }
}

export const login = (payload) => async (dispatch) => {
    try {
        const response = await apiLogin(payload)
        if (response?.data.err === 0) {
            dispatch({
                type: types.LOGIN_SUCCESS,
                data: response.data.token
            })
        } else {
            dispatch({
                type: types.LOGIN_FAIL,
                data: response.data.msg
            })
        }
    } catch (error) {
        dispatch({
            type: types.LOGIN_FAIL,
            data: null
        })
    }
}

export const logout = () => ({
    type: types.LOGOUT
})