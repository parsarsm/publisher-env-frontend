import {userActionTypes} from "../actions/userActions";
import {profileActionTypes} from "../actions/profileActions";

const initialState = {
    loggedIn: false,
};

export default function profileReducer(prevState = initialState, action) {
    switch (action.type) {
        case profileActionTypes.UPDATE_PROFILE_START:
            return {...prevState, loading: true};
        case profileActionTypes.UPDATE_PROFILE_SUCCESS:
            return {...prevState, loading: false, successfulUpdate: true};
        case profileActionTypes.UPDATE_PROFILE_FAILED:
            return {...prevState, loading: false, failedUpdate: true, errMessage: action.payload.message};
    }

    return prevState;
}