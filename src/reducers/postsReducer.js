import {postActionTypes} from "../actions/postActions";

const initialState = {};

export default function userReducer(prevState = initialState, action) {
    switch (action.type) {
        case postActionTypes.UPDATE_POSTS:
            const posts = {};
            for (const post of action.payload) {
                posts[post.id] = post;
            }

            return {...prevState, ...posts};
        case postActionTypes.LIKE_POST:
            return {
                ...prevState, ...{
                    [action.payload.id]: {
                        ...prevState[action.payload.id],
                        liked: !action.payload.active,
                        likes_count: prevState[action.payload.id].likes_count + (action.payload.active ? -1 : 1)
                    }
                }
            };
        case postActionTypes.DISLIKE_POST:
            return {
                ...prevState, ...{
                    [action.payload.id]: {
                        ...prevState[action.payload.id],
                        disliked: !action.payload.active,
                        dislikes_count: prevState[action.payload.id].dislikes_count + (action.payload.active ? -1 : 1)
                    }
                }
            };
        case postActionTypes.REMOVE_POST:
            const newStateAfterRemovePost = {...prevState};
            delete newStateAfterRemovePost[action.payload.id];
            return newStateAfterRemovePost;
    }

    return prevState;
}