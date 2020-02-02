import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./pages/homePage/homePage";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import Post from "./pages/post/Post";
import ProfileSettings from "./pages/profileSettings/profileSettings";
import Page from "./components/containers/Page";

const routes = {
    homePage: '/',
    signUp: '/signUp',
    profile: '/' +
        '',
    post: '/post',
    profileSettings: "/profile/settings",
    postById: '/post/:postId',
    profileById: '/profile/:userId',
};

export default function Routes() {
    return (
        <Page>
            <Switch>
                <Route exact path={routes.homePage}>
                    <HomePage/>
                </Route>
                <Route exact path={routes.signUp}>
                    <SignUp/>
                </Route>
                <Route exact path={routes.profile}>
                    <Profile/>
                </Route>
                <Route exact path={routes.post}>
                    <Post/>
                </Route>
                <Route exact path={routes.profileSettings}>
                    <ProfileSettings/>
                </Route>
            </Switch>
        </Page>
    );
}
