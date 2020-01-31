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
                    {/*<Route path="/profile">*/}
                    {/*    <UserProfile/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/newPost">*/}
                    {/*    <EditPost/>*/}
                    {/*</Route>*/}
                </Switch>
            </Container>

        </Router>

    );
}
