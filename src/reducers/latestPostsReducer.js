import {latestPostsActionTypes} from "../actions/latestPostsActions";

const initialState = {
    posts: []
};

export default function latestPostsReducer(prevState = initialState, action) {
    switch (action.type) {
        case latestPostsActionTypes.LATEST_POSTS_START:
            return {...prevState, loading: true};
        case latestPostsActionTypes.LATEST_POSTS_SUCCESS:
            return {
                ...prevState,
                loading: false,
                posts: (prevState.posts).concat(action.payload.newPosts)
            };
        case latestPostsActionTypes.LATEST_POSTS_END:
            return {...prevState, loading: false, end: true};
    }

    return prevState;
}