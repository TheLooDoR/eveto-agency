import {
    GET_MENU_DATA,
    GET_PROJECTS_DATA,
    GET_TEAM_DATA,
} from "../actions/";

export default (
    state = {
        projectsData: {},
        menuData: {},
        teamData: {}
    }, action
) => {
    switch (action.type) {
        case GET_PROJECTS_DATA:
            return {
                ...state,
                projectsData: action.payload
            }
        case GET_MENU_DATA:
            return {
                ...state,
                menuData: action.payload
            }
        case GET_TEAM_DATA:
            return {
                ...state,
                teamData: action.payload
            }
        default:
            return state
    }
}