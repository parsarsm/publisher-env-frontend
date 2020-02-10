import Api from "../api";

export const postActionTypes = {
    UPDATE_POSTS: 'UPDATE_POSTS',
    LIKE_POST: 'LIKE_POST',
    DISLIKE_POST: 'DISLIKE_POST',
};

export function updatePosts(posts) {
    return {
        type: postActionTypes.UPDATE_POSTS,
        payload: posts
    };
}


export function likePostAction(id, active) {
    return async (dispatch) => {
        let error;
        if (active) {
            let {error} = await Api.removeLike(id);
        } else {
            let {error} = await Api.like(id);
        }
        if (!error) {
            dispatch({
                type: postActionTypes.LIKE_POST,
                payload: {id: id, active}
            });
        }
    }
}

export function dislikePostAction(id, active) {
    return async (dispatch) => {
        let error;
        if (active) {
            let {error} = await Api.removeDislike(id);
        } else {
            let {error} = await Api.dislike(id);
        }
        if (!error) {
            dispatch({
                type: postActionTypes.DISLIKE_POST,
                payload: {id: id, active}
            });
        }
    }
}
