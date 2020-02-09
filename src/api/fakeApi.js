export async function updateProfile(username, password, email, firstName, lastName, gender, country, description) {
    await new Promise(res => setTimeout(res, 2000));
    return {
        success: null,
        error: null
    }

}

export async function login(username, password) {
    await new Promise(res => setTimeout(res, 2000));

    if (username === 'parsa' && password === 'rostami') {
        return {
            success: {
                ACCESS_TOKEN: '',
                REFRESH_AUTH_TOKEN: ''
            },
            error: null
        }
    } else {
        return {
            success: null,
            error: {
                message: 'Username or password is not correct'
            }
        }
    }
}