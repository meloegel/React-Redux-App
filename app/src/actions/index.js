import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_DAILYCOMIC = 'UPDATE_DAILYCOMIC';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
    dispatch({type: FETCH_DATA})
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(res => {
        console.log(res)
        dispatch({type: UPDATE_DAILYCOMIC, payload: res.data.message})
    })
    .catch(err => {console.error('error fetching data from API. err:', err)
        dispatch({type: SET_ERROR, payload: 'error fetching data from API'})
    });
}