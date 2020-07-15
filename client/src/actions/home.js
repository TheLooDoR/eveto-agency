import Axios from "axios";

//actions types
export const GET_PAGE_DATA = "GET_PAGE_DATA"

export const GET_TECHNOLOGIES_DATA =  "GET_TECHNOLOGIES_DATA"


const pageData = pageData => {
    return {
        type: GET_PAGE_DATA,
        payload: pageData
    }
}


const technologiesData = technologiesData => {
    return {
        type: GET_TECHNOLOGIES_DATA,
        payload: technologiesData
    }
}


export const getPageData = () => dispatch => {
    Axios.get('http://api.eveto.io/wp-json/page/v2/home')
        .then((response) => {
            dispatch(pageData(response.data))
        })
}

export const getTechnologiesData = () => dispatch => {
    Axios.get('http://api.eveto.io/wp-json/options-page/v2/technology')
        .then((response) => {
            dispatch(technologiesData(response.data))
        })
}



