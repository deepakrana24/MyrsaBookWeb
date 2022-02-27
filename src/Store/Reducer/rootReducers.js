
import bookReducer from "./bookReducer";
import { combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    bookReducer,
});



export default rootReducer;


