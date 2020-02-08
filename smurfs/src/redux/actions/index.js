import axios from 'axios';

// make call, get data, get error
export const START_GET = "START_GET";
export const GET_DATA = "GET_DATA";
export const GET_ERROR = "GET_ERROR";

export const START_ADD = 'START_ADD';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

// thunk call to get data
export const getData = () => (dispatch) => {
    dispatch({type: START_GET});
    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_DATA, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_ERROR, payload: err }));
}

export const addData = newSmurf => dispatch => {
    dispatch({ type: START_ADD });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(res => dispatch({ type: ADD_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: ADD_FAILURE, payload: err }))
}
