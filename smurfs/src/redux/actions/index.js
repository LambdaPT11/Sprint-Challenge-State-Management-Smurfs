import axios from 'axios';

// make call, get data, get error
export const START_GET = "START_GET";
export const GET_DATA = "GET_DATA";
export const GET_ERROR = "GET_ERROR";

// thunk call to get data
export const getData = () => (dispatch) => {
    dispatch({type: START_GET});
    axios
        .get('http://localhost:333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_DATA, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_ERROR, payload: err }));
}