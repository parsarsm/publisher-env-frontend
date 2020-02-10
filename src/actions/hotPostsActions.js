import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";

export const hotPostsActionTypes = {
    HOT_POSTS_START: 'HOT_POSTS_START',
    HOT_POSTS_SUCCESS: 'HOT_POSTS_SUCCESS',
    HOT_POSTS_END: 'HOT_POSTS_END',
};

export function hotPostsAction(lastId) {
    return async (dispatch) => {
        dispatch({type: hotPostsActionTypes.HOT_POSTS_START});
        const {response, error} = await Api.getLatestPosts(null, lastId);
        // if (error) {
        //     dispatch({type: latestPostsActionTypes.LATEST_POSTS_END, payload: {message: error.detail || "Login failed."}});
        // console.log(response, error, 'sd');
        if (response.length === 0) {
            dispatch({type: hotPostsActionTypes.HOT_POSTS_END});
        } else {
            dispatch({type: hotPostsActionTypes.HOT_POSTS_SUCCESS, payload: {newPosts: response}});
        }
    }
}
