import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import resetPassReducer from "./resetPassReducer";
import latestPostsReducer from "./latestPostsReducer";

export default (history) => combineReducers({
    router: connectRouter(history),
    user: userReducer,
    profile: profileReducer,
    resetPass: resetPassReducer,
    latestPosts: latestPostsReducer,

});