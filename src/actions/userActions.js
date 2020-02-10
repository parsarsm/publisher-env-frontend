import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";

export const userActionTypes = {
    LOGIN_START: 'LOGIN_START',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILED: 'LOGIN_FAILED',
    PROFILE_LOADED: 'PROFILE_LOADED',
    NO_PROFILE: 'NO_PROFILE',
    SIGN_UP_START: 'SIGN_UP_START',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILED: 'SIGN_UP_FAILED'
};

export function getMyProfileAction() {
    return async (dispatch) => {
        const {response, error} = await Api.myProfile();
        if (error) {
            dispatch({type: userActionTypes.NO_PROFILE, payload: {}});

        } else {
            dispatch({type: userActionTypes.PROFILE_LOADED, payload: {...response}});
        }
    }
}

export function loginAction(username, password) {
    return async (dispatch) => {
        dispatch({type: userActionTypes.LOGIN_START});
        const {response, error} = await Api.login(username, password);
        if (error) {
            dispatch({type: userActionTypes.LOGIN_FAILED, payload: {message: error.detail || "Login failed."}});
        } else {
            dispatch({type: userActionTypes.LOGIN_SUCCESS, payload: {tokenValues: response}});
            dispatch(push(routes.FEED))
        }
    }
}

export function signupAction(signupData) {
    return async (dispatch) => {
        dispatch({type: userActionTypes.SIGN_UP_START});
        const {username, password, email, firstName, lastName} = signupData;

        console.log('sdfsdf');
        const {response, error} = await Api.signup(username, password, email, firstName, lastName);
        if (error) {
            console.log(error);
            dispatch({type: userActionTypes.SIGN_UP_FAILED, payload: {message: error.detail || "Sign Up failed."}});
        } else {
            dispatch({type: userActionTypes.SIGN_UP_SUCCESS});
            dispatch(push(routes.FEED))
        }
    }
}