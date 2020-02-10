import Api from "../api";

export const postActionTypes = {
    UPDATE_POSTS: 'UPDATE_POSTS',
};

export function updatePosts(posts) {
    return {
        type: postActionTypes.UPDATE_POSTS,
        payload: posts
    };
}
