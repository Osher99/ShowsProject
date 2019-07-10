import { combineReducers } from 'redux';
import FetchShowsReducer  from './FetchShowsReducer';

export default combineReducers({
    fetch: FetchShowsReducer
});