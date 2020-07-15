import Axios from "axios";

export const GET_MENU_DATA = "GET_MENU_DATA"
export const GET_PROJECTS_DATA =  "GET_PROJECTS_DATA"
export const GET_TEAM_DATA = 'GET_TEAM_DATA'

const menuData = menuData => {
    return {
        type: GET_MENU_DATA,
        payload: menuData
    }
}

const projectsData = projectsData => {
    return {
        type: GET_PROJECTS_DATA,
        payload: projectsData
    }
}

const teamData = teamData => {
    return {
        type: GET_TEAM_DATA,
        payload: teamData
    }
}

export const getMenuData = () => dispatch => {
    Axios.get('http://api.eveto.io/wp-json/menus/v1/menus/2')
        .then((response) => {
            dispatch(menuData(response.data))
        });
}

export const getProjectsData = () => dispatch => {
    Axios.get('http://api.eveto.io/wp-json/projects/v2/archive')
        .then((response) => {
            dispatch(projectsData(response.data))
        })
}

export const getTeamData = ()=> dispatch => {
    Axios.get('http://api.eveto.io/wp-json/options-page/v2/our_team')
        .then((response) => {
            dispatch(teamData(response.data))
        })
}