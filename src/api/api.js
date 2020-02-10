import jwtDecode from 'jwt-decode';
import {encodeQueryString} from "../helpers/url";

const endpoints = {
    AUTH_TOKEN: '/api/token/',
    REFRESH_TOKEN: '/api/token/refresh/',
    POSTS: '/api/posts/',
    LATEST_POSTS: '/api/posts/latest/',
    HOT_POSTS: '/api/posts/hottest/',
    FEED_POSTS: '/api/posts/',
    USER: '/api/user/',
    MY_PROFILE: '/api/profiles/my/',
};

export default class Api {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._config = {
            refreshTokenTimeout: 5000,
            accessTokenTimeout: 5000,
        };
        const storeAuth = window.localStorage.getItem('JWT_KEYS');
        const auth = storeAuth === 'undefined' ? null : JSON.parse(storeAuth);
        this.setAuthentication(auth);
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
        if (this._auth && this._auth.data.access.exp) {
            return 1000 * this._auth.data.access.exp - (new Date()).getTime() < this._config.accessTokenTimeout;
        }
        return true;
    }

    _isRefreshTokenExpired() {
        if (this._auth && this._auth.data.refresh.exp) {
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

            if (response.status === 204) {
                return {response: true};
            }
            const jsonResponse = await response.json();
            if (response.status >= 200 && response.status < 300) {
                return {response: jsonResponse, status: response.status};
            } else {
                return {error: jsonResponse, status: response.status};
            }
        } catch (e) {
            console.log(e);
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

    async _getPostsList(endpoint, from, to) {
        const queryString = {...(from ? {_from: from} : {}), ...(to ? {_to: to} : {})};
        return this._fetch(
            `${endpoint}${encodeQueryString(queryString)}`,
            'GET'
        );
    }

    async getLatestPosts(from = null, to = null) {
        return this._getPostsList(endpoints.LATEST_POSTS, from, to);
    }

    async getHotPosts() {
        return this._fetch(
            endpoints.HOT_POSTS,
            'GET'
        );
    }

    async getFeedPosts(from = null, to = null) {
        return this._getPostsList(endpoints.FEED_POSTS, from, to);

    }

    async insertPost(data) {
        return this._fetch(
            endpoints.POSTS,
            'POST',
            data
        );
    }

    async updatePost(data) {
        return this._fetch(
            endpoints.POSTS,
            'PATCH',
            data
        );
    }

    async getPost(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/`,
            'GET'
        );
    }

    async removePost(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/`,
            'DELETE'
        );
    }

    async like(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/like/`,
            'POST'
        );
    }

    async removeLike(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/like/`,
            'DELETE'
        );
    }

    async dislike(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/dislike/`,
            'POST'
        );
    }


    async removeDislike(id) {
        return this._fetch(
            `${endpoints.POSTS}${id}/dislike/`,
            'DELETE'
        );
    }

    async myProfile() {
        return this._fetch(
            endpoints.MY_PROFILE,
            'GET'
        )
    }

    async signup(username, email, firstName, lastName, password) {
        return this._fetch(
            endpoints.USER,
            'POST',
            {
                username,
                email,
                first_name: firstName,
                last_name: lastName,
                password
            }
        )
    }
}