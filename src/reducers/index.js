import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import resetPassReducer from "./resetPassReducer";
import latestPostsReducer from "./latestPostsReducer";
import hotPostsReducer from "./hotPostsReducer";
import searchReducer from "./searchReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    profile: profileReducer,
    resetPass: resetPassReducer,
    latestPosts: latestPostsReducer,
    hotPosts: hotPostsReducer,
    search: searchReducer,

});