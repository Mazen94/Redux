
import { FETCH_DATA_ATTEMPT, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, BUY_ARTICLE } from '../actions/actionsTypes';

const INITIAL_STATE = { loading: false, articles: [], error: null, articlesToBuy: [] };

const GalleryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FETCH_DATA_ATTEMPT:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, articles: action.value };
        case FETCH_DATA_ERROR:
            return { ...state, loading: false, error: action.value }
        case BUY_ARTICLE:
            return { ...state, articlesToBuy: [...state.articlesToBuy, action.value] }
        default:
            return state;
    }
}

export default GalleryReducer;