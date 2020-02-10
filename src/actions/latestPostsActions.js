import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";

export const latestPostsActionTypes = {
    LATEST_POSTS_START: 'LATEST_POSTS_START',
    LATEST_POSTS_SUCCESS: 'LATEST_POSTS_SUCCESS',
    LATEST_POSTS_END: 'LATEST_POSTS_END',
};

export function latestPostsAction(lastId) {
    return async (dispatch) => {
        dispatch({type: latestPostsActionTypes.LATEST_POSTS_START});
        const {response, error} = await Api.getLatestPosts(null, lastId);
        // if (error) {
        //     dispatch({type: latestPostsActionTypes.LATEST_POSTS_END, payload: {message: error.detail || "Login failed."}});
        // console.log(response, error, 'sd');
        if (response.length === 0) {
            dispatch({type: latestPostsActionTypes.LATEST_POSTS_END});
        } else {
            dispatch({type: latestPostsActionTypes.LATEST_POSTS_SUCCESS, payload: {newPosts: response}});
        }
    }
}
