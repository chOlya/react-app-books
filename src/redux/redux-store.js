import { applyMiddleware, combineReducers, createStore } from "redux";
import headerReducer from "./header-reducer";
import searchResultsReducer from "./searchResult-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    header: headerReducer,
    searchResult: searchResultsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;