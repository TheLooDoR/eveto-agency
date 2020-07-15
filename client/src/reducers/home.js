import {
    GET_PAGE_DATA,
    GET_TECHNOLOGIES_DATA
} from "../actions/";

export default (
    state = {
        pageData: {},
        technologiesData: {}
    }, action
) => {
    switch (action.type) {
        case GET_PAGE_DATA:
            return {
                ...state,
                pageData: action.payload
            }
        case GET_TECHNOLOGIES_DATA:
            return {
                ...state,
                technologiesData: action.payload
            }
        default:
            return state
    }
}