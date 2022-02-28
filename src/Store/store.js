import {createStore} from "redux";
import rootReducer from "./Reducer/rootReducers";
import thunk from "redux-thunk" 
import {  applyMiddleware } from 'redux';
let store = createStore(rootReducer,applyMiddleware(thunk));

export default store;