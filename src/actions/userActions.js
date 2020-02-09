import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";

export const userActionTypes = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
};

export function loginAction(username, password) {
    return async (dispatch) => {
        dispatch({type: userActionTypes.LOGIN_START});
        const {response, error} = await Api.login(username, password);
        if (error) {
            dispatch({type: userActionTypes.LOGIN_FAILED, payload: {message: error.message}});
        } else {
            dispatch({type: userActionTypes.LOGIN_SUCCESS, payload: {tokenValues: response}});
            dispatch(push(routes.FEED))
        }
    }
}

export function signupAction(signupData) {
    return async (dispatch) => {

    }
}