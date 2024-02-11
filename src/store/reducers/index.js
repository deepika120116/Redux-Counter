import { counter } from "./counter";
import { loggedIn } from './loggedIn';
import { combineReducers } from "redux";

const store = combineReducers({
    counter: counter,
    login: loggedIn
});

export default store;