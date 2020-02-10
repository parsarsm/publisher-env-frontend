import {searchActionTypes} from "../actions/searchActions";

const initialState = {
    result: [],
    loading: false,
};

export default function searchReducer(prevState = initialState, action) {
    switch (action.type) {
        case searchActionTypes.SEARCH_START:
            return {...prevState, loading: true};
        case searchActionTypes.SEARCH_END:
            return {...prevState, loading: false, result: action.payload.result};
    }

    return prevState;
}