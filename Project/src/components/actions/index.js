import { 
 GET_SHOWS,
 CHANGED_TEXT_SEARCH
  } from './types';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';

export const textSearchChanged = (text) => {
    return (dispatch) => {
        dispatch({type: CHANGED_TEXT_SEARCH, payload: text})
    }
}

export const fetchShows = () => {
    return (dispatch) => {
        axios
    .get('http://api.tvmaze.com/shows')
    .then(response => 
        dispatch({type: GET_SHOWS, payload: response.data})
        ).catch((error) => {
            console.log(error);
        });
    }
}
