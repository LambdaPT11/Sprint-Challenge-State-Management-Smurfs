import axios from 'axios';

// make call, get data, get error
const START_GET = "START_GET";
const GET_DATA = "GET_DATA";
const GET_ERROR = "GET_ERROR";

// thunk call to get data
const getDate = () => (dispatch) => {
    dispatch({type: START_GET});
    axios
        .get('http://localhost:333/smurfs')
        .then(res => {
            console.log(res);
            dispatch({ type: GET_DATA, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_ERROR, payload: err }));
}