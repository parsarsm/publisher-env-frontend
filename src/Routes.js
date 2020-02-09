import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Page from "./components/containers/Page";
import FeedPage from "./pages/FeedPage";
import HotPostsPage from "./pages/HotPostsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import {routes} from "./config/routes";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import LatestPostsPage from "./pages/LatestPostsPage";
import ProfilePage from "./pages/ProfilePage";
import EditProfilePage from "./pages/EditProfilePage";
import PostPage from "./pages/PostPage";
import Profile from "./pages/profile";
import ProfileSettings from "./pages/ProfileSettings";


export default function Routes() {
    return (
        <Page>
            <Switch>
                <Route exact path={'/profile'}>
                    <Profile/>
                </Route>
                <Route exact path={routes.PROFILE_SETTINGS}>
                    <ProfileSettings/>
                </Route>
                <Route exact path={routes.FEED}>
                    <FeedPage/>
                </Route>
                <Route exact path={routes.POSTS_HOT}>
                    <HotPostsPage/>
                </Route>
                <Route exact path={routes.POSTS_LATEST}>
                    <LatestPostsPage/>
                </Route>
                <Route exact path={routes.PROFILE_VIEW}>
                    <ProfilePage/>
                </Route>
                <Route exact path={routes.PROFILE_EDIT}>
                    <EditProfilePage/>
                </Route>
                <Route exact path={routes.POST_VIEW}>
                    <PostPage/>
                </Route>
                <Route exact path={routes.USER_LOGIN}>
                    <LoginPage/>
                </Route>
                <Route exact path={routes.USER_FORGOT_PASSWORD}>
                    <ForgotPasswordPage/>
                </Route>
                <Route exact path={routes.USER_SIGN_UP}>
                    <SignUpPage/>
                </Route>
                <Redirect to={routes.POSTS_LATEST}/>
            </Switch>
        </Page>
    );
}
