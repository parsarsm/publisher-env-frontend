import Api from "../api";

export const postActionTypes = {
    UPDATE_POSTS: 'UPDATE_POSTS',
    LIKE_POST: 'LIKE_POST',
    DISLIKE_POST: 'DISLIKE_POST',
    REMOVE_POST: 'REMOVE_POST',
};

export function updatePosts(posts) {
    return {
        type: postActionTypes.UPDATE_POSTS,
        payload: posts
    };
}


export function likePostAction(id, active) {
    return async (dispatch) => {
        let result;
        if (active) {
            result = await Api.removeLike(id);
        } else {
            result = await Api.like(id);
        }
        if (!result.error) {
            dispatch({
                type: postActionTypes.LIKE_POST,
                payload: {id: id, active}
            });
        }
    }
}

export function dislikePostAction(id, active) {
    return async (dispatch) => {
        let result;
        if (active) {
            result = await Api.removeDislike(id);
        } else {
            result = await Api.dislike(id);
        }
        if (!result.error) {
            dispatch({
                type: postActionTypes.DISLIKE_POST,
                payload: {id: id, active}
            });
        }
    }
}

export function deletePostAction(id) {
    return async (dispatch) => {
        let {error} = await Api.removePost(id);
        if (!error) {
            dispatch({
                type: postActionTypes.REMOVE_POST,
                payload: {id}
            });
        }
    }
}


export function loadPostAction(id) {
    return async (dispatch) => {
        const {response, error} = await Api.getPost(id);
        if (response) {
            dispatch(updatePosts(response));
        }
    }
}
