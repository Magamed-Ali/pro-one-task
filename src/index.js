import React from "react";
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";

const initialState ={
    todos: [],
    loading: false,
};
console.log()
const reduser = (state = initialState, action) =>{
    switch (action.type){
        case 'load':
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case 'started':
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }

}

const store = createStore(reduser, applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)