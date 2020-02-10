import {hotPostsActionTypes} from "../actions/hotPostsActions";

const initialState = {
    posts: []
};

export default function hotPostsReducer(prevState = initialState, action) {
    switch (action.type) {
        case hotPostsActionTypes.HOT_POSTS_START:
            return {...prevState, loading: true};
        case hotPostsActionTypes.HOT_POSTS_SUCCESS:
            return {
                ...prevState,
                loading: false,
                posts: (prevState.posts).concat(action.payload.newPosts)
            };
        case hotPostsActionTypes.HOT_POSTS_END:
            return {...prevState, loading: false, end: true};
    }

    return prevState;
}