import constants from '../../constants/constants'
import axios from 'axios';
import { FETCH_DATA_ATTEMPT, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, BUY_ARTICLE } from './actionsTypes';

export const fetchData = () => {
    return dispatch => {

        let config = {
            method: 'GET',
            url: "https://jsonplaceholder.typicode.com/posts",
            timeout: 2000,

        }

        dispatch({ type: FETCH_DATA_ATTEMPT })
        axios(config)
            .then(response => {
                dispatch({ type: FETCH_DATA_SUCCESS, value: response.data })
            }
            )
            .catch(err => {
                dispatch({ type: FETCH_DATA_ERROR, value: err.response })
            })

    }
}

export const buy = (article) => {
    return dispatch => (
        dispatch({ type: BUY_ARTICLE, value: article })
    )
}