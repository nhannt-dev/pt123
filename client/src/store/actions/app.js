import types from "./types"
import { apiGetAreas, apiGetCategories, apiGetPrices  } from "../../services"

export const getCategories = () => async (dispatch) => {
    try {
        const response = await apiGetCategories()
        if (response?.data.err === 0) {
            dispatch({
                type: types.GET_CATEGORIES,
                categories: response.data.response
            })
        } else {
            dispatch({
                type: types.GET_CATEGORIES,
                msg: response.data.msg,
                categories: null
            })
        }
    } catch (error) {
        dispatch({
            type: types.GET_CATEGORIES,
            categories: null
        })
    }
}

export const getPrices = () => async (dispatch) => {
    try {
        const response = await apiGetPrices()
        if (response?.data.err === 0) {
            dispatch({
                type: types.GET_PRICES,
                prices: response.data.response.sort((a, b) => { return +a.order - +b.order }),
                msg: ''
            })
        } else {
            dispatch({
                type: types.GET_PRICES,
                msg: response.data.msg,
                prices: null
            })
        }
    } catch (error) {
        dispatch({
            type: types.GET_PRICES,
            prices: null,
            msg: error
        })
    }
}

export const getAreas = () => async (dispatch) => {
    try {
        const response = await apiGetAreas()
        if (response?.data.err === 0) {
            dispatch({
                type: types.GET_AREAS,
                areas: response.data.response.sort((a, b) => { return +a.order - +b.order }),
                msg: ''
            })
        } else {
            dispatch({
                type: types.GET_AREAS,
                msg: response.data.msg,
                areas: null
            })
        }
    } catch (error) {
        dispatch({
            type: types.GET_AREAS,
            areas: null,
            msg: error
        })
    }
}