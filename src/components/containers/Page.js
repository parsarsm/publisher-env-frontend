import {Card, Container, Grid, Header as UIHeader, List, Segment} from "semantic-ui-react";
import Header from "../sections/Header";
import React from "react";
import Posts from "../posts/Posts";

const exampleProfile = {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
};
export default class Page extends React.PureComponent {
    render() {
        return (
            <>
                <Container>
                    <Header/>
                </Container>
                <Container style={{paddingTop: '7em'}}>
                    {this.props.children}
                </Container>
            </>
        );
    }
}