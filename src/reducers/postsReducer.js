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
    }

    return prevState;
}