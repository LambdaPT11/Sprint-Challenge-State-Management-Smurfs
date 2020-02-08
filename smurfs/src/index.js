import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //get thunk
import reducer from './redux/reducers'

import App from "./components/App";
import "./index.css";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
        <Provider>
            <App />
        </Provider>, 
    document.getElementById("root"));
