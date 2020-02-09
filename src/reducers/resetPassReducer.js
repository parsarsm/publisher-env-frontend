import {userActionTypes} from "../actions/userActions";
import {profileActionTypes} from "../actions/profileActions";
import {resetPassActionTypes} from "../actions/resetPassActions";

const initialState = {
    loggedIn: false,
};

export default function resetPassReducer(prevState = initialState, action) {
    switch (action.type) {
        case resetPassActionTypes.RESET_PASS_START:
            return {...prevState, loading: true};
        case resetPassActionTypes.RESET_PASS_SUCCESS:
            return {...prevState, loading: false, successfulResetPass: true};
        case resetPassActionTypes.RESET_PASS_FAILED:
            return {...prevState, loading: false, failedResetPass: true, detail: action.payload.message};
    }

    return prevState;
}