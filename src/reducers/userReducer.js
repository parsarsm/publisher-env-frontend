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
    }

    return prevState;
}