import { FETCH_DATA, UPDATE_DAILYCOMIC, SET_ERROR } from '../actions';

const initialState = {
    dailyComic: '',
    isFetchingData: false,
    error: ''
};

export const comicReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_DAILYCOMIC:
            return {
                ...state,
                dailyComic: action.payload,
                isFetchingData: false
            }
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}