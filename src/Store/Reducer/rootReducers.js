
import bookReducer from "./bookReducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
   books: bookReducer,
});

export default rootReducer;


