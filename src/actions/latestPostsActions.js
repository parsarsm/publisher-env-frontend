import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";
import {updatePosts} from "./postActions";

export const latestPostsActionTypes = {
    LATEST_POSTS_START: 'LATEST_POSTS_START',
    LATEST_POSTS_SUCCESS: 'LATEST_POSTS_SUCCESS',
    LATEST_POSTS_END: 'LATEST_POSTS_END',
};

export function latestPostsAction(lastId = null) {
    return async (dispatch) => {
        dispatch({type: latestPostsActionTypes.LATEST_POSTS_START});
        const {response, error} = await Api.getLatestPosts(null, lastId);
        if (response && response.length) {
            dispatch(updatePosts(response));
            dispatch({type: latestPostsActionTypes.LATEST_POSTS_SUCCESS, payload: {newPosts: response.map(post => post.id)}});
        } else if ((response && !response.length)) {
            dispatch({type: latestPostsActionTypes.LATEST_POSTS_END});
        }
    }
}
