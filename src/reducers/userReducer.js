import {userActionTypes} from "../actions/userActions";

const initialState = {
    loggedIn: false,
};

export default function userReducer(prevState = initialState, action) {
    switch (action.type) {
        case userActionTypes.LOGIN_START:
            return {...prevState, loading: true};
        case userActionTypes.LOGIN_SUCCESS:
            return {...prevState, loading: false, loggedIn: true, tokenValues: action.payload.tokenValues};
        case userActionTypes.LOGIN_FAILED:
            return {...prevState, loading: false, failedLogin: true, errMessage: action.payload.message};
        case userActionTypes.PROFILE_LOADED:
            return {...prevState, loading: false, loggedIn: true, user: {...action.payload}, ready: true};
        case userActionTypes.NO_PROFILE:
            return {...prevState, loading: false, loggedIn: false, user: {}, ready: true};
    }

    return prevState;
}