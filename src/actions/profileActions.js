import Api from '../api';
import {push} from 'connected-react-router'
import {routes} from "../config/routes";
import {updateProfile} from "../api/fakeApi";

export const profileActionTypes = {
    UPDATE_PROFILE_START: 'UPDATE_PROFILE_START',
    UPDATE_PROFILE_SUCCESS: 'UPDATE_PROFILE_SUCCESS',
    UPDATE_PROFILE_FAILED: 'UPDATE_PROFILE_FAILED',
};

export function updateProfileAction(
    username,
    password,
    email,
    firstName,
    lastName,
    gender,
    country,
    description
) {
    return async (dispatch) => {
        dispatch({type: profileActionTypes.UPDATE_PROFILE_START});
        const {response, error} = await updateProfile(
            username,
            password,
            email,
            firstName,
            lastName,
            gender,
            country,
            description
        );
        if (error) {
            dispatch({type: profileActionTypes.UPDATE_PROFILE_FAILED, payload: {message: error.detail}});
        } else {
            dispatch({type: profileActionTypes.UPDATE_PROFILE_SUCCESS});
            // dispatch(push(routes.PROFILE_SETTINGS))
        }


    }
}
