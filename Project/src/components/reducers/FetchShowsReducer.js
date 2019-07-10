import {
    GET_SHOWS,
    CHANGED_TEXT_SEARCH
} from '../actions/types';

const INITIAL_STATE = {
 shows: [],
 search: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){

        case GET_SHOWS:
            return  { ...state,  shows: action.payload.filter(item=> (item.id<15)) };
        
        case CHANGED_TEXT_SEARCH: 
                return  { ...state, search: action.payload };

        default:
            return state;
    }
}