import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";
import {resetPass} from "../api/fakeApi";

export const resetPassActionTypes = {
    RESET_PASS_START: 'RESET_PASS_START',
    RESET_PASS_SUCCESS: 'RESET_PASS_SUCCESS',
    RESET_PASS_FAILED: 'RESET_PASS_FAILED',
};

export function resetPassAction(username, password) {
    return async (dispatch) => {
        dispatch({type: resetPassActionTypes.RESET_PASS_START});
        const {response, error} = await resetPass(username);
        if (error) {
            dispatch({type: resetPassActionTypes.RESET_PASS_FAILED, payload: {message: error.detail || "Something went wrong! please try later."}});
        } else {
            dispatch({type: resetPassActionTypes.RESET_PASS_SUCCESS});
        }
    }
}
