import { combineReducers, createStore } from "redux";
import todoReducer from "./reducerListToDo";
import reducerFilter from "./reducerFilter";

const store = createStore(combineReducers({ todoReducer, reducerFilter }));

export default store;