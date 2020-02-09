import jwtDecode from 'jwt-decode';

const endpoints = {
    AUTH_TOKEN: '/api/token/',
    REFRESH_TOKEN: '/api/token/refresh/',
    POSTS: '/api/posts/',
};

export default class Api {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._config = {
            refreshTokenTimeout: 5000,
            accessTokenTimeout: 5000,
        };
        this._auth = window.localStorage.getItem('JWT_KEYS') || null;
    }

    setAuthentication(tokens) {
        if (tokens) {
            this._auth = {
                tokens: tokens,
                data: {
                    access: jwtDecode(tokens.access),
                    refresh: jwtDecode(tokens.refresh)
                }
            };
        } else {
            this._auth = null;
        }

        window.localStorage.setItem('JWT_KEYS', JSON.stringify(tokens));
    }

    _getAuthHeaders() {
        if (!this._auth) {
            return {};
        }
        return {
            Authorization: `Bearer ${this._auth.tokens.access}`
        };
    }

    isAuthenticated() {
        return this._auth && !this._isRefreshTokenExpired();
    }

    _isAccessTokenExpired() {
        if (this._auth.data.access && this._auth.data.access.exp) {
            return 1000 * this._auth.data.access.exp - (new Date()).getTime() < this._config.accessTokenTimeout;
        }
        return true;
    }

    _isRefreshTokenExpired() {
        if (this._auth.data.refresh && this._auth.data.refresh.exp) {
            return 1000 * this._auth.data.refresh.exp - (new Date()).getTime() < this._config.refreshTokenTimeout;
        }
        return true;
    }

    async _fetch(endpoint, method, body) {
        try {
            if (this.isAuthenticated() && this._isAccessTokenExpired()) {
                await this._refreshToken();
            }
            const response = await fetch(
                `${this._baseUrl}${endpoint}`,
                {
                    method: method,
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        ...(this._getAuthHeaders())
                    },
                    ...(body ? {body: JSON.stringify(body)} : {})
                }
            );

            const jsonResponse = await response.json();
            if (response.status >= 200 && response.status < 300) {
                return {response: jsonResponse, status: response.status};
            } else {
                return {error: jsonResponse, status: response.status};
            }
        } catch (e) {
            return {error: e};
        }
    }

    async _refreshToken() {
        try {
            const response = await fetch(
                `${this._baseUrl}${endpoints.REFRESH_TOKEN}`,
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({refresh: this._auth.tokens.refresh})
                }
            );

            const jsonResponse = await response.json();
            this.setAuthentication({...this._auth.tokens, ...jsonResponse});
        } catch (e) {
            return {error: e};
        }
    }

    async login(username, password) {
        const auth = await this._fetch(
            endpoints.AUTH_TOKEN,
            'POST',
            {
                username: username,
                password: password,
            }
        );

        this.setAuthentication(auth.response);
        return auth;
    }

    async logout() {
        this.setAuthentication(null);
    }

    async listPosts() {
        return this._fetch(
            endpoints.POSTS,
            'GET'
        );
    }
}