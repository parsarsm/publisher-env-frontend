import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PHeader from "./componentsV2/header/PHeader";
import HomePage from "./pagesV2/homePage/homePage";
import {Container} from "semantic-ui-react";
import SignUp from "./pagesV2/signUp/SignUp";
import Profile from "./pagesV2/profile/Profile";
import Post from "./pagesV2/post/Post";
// import "./fonts.css"

export default function App() {

    return (
        <Router>
            <PHeader/>
            <Container  style={{marginTop: '7em'}}>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/signUp">
                        <SignUp/>
                    </Route>
                    <Route exact path="/profile">
                        <Profile/>
                    </Route>
                    <Route exact path="/post">
                        <Post/>
                    </Route>
                </Switch>
            </Container>

        </Router>

    );
}
