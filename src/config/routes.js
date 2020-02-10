export const routes = {
    FEED: '/feed',
    USER_LOGIN: '/user/login',
    USER_SIGN_UP: '/user/sign-up',
    USER_FORGOT_PASSWORD: '/user/forgot-password',
    PROFILE_VIEW: '/profile/view/:username',
    PROFILE_EDIT: '/profile/edit/:username',
    POST_VIEW: '/posts/view/:id',
    POST_ADD: '/posts/add',
    POST_EDIT: '/posts/edit/:id',
    POSTS_HOT: '/posts/hot',
    POSTS_LATEST: '/posts/latest',
    CHANNEL_VIEW: '/channels/view/:id',
    CHANNEL_EDIT: '/channels/edit/:id',
    CHANNEL_MEMBERS: '/channels/members/:id',
    SEARCH: '/search/:query',
    PROFILE_SETTINGS: '/profile/settings',
    PROFILE: '/profile', CHANNEL: '/channel'

};

const baseUrl = 'http://localhost:8000';

export const getPostLink = (postId) => {
    console.log(baseUrl + '/posts/view/' + postId);
    return baseUrl + '/posts/view/' + postId;
};
