import { START_GET, GET_DATA, GET_ERROR } from '../actions';

const initialState = {
    smurfs: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GET:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case GET_DATA:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            }
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        default:
            return state;
    }
}

export default reducer;