import {Card, Container, Grid, Header as UIHeader, List, Segment} from "semantic-ui-react";
import Header from "../sections/Header";
import React from "react";
import Posts from "../posts/Posts";

const exampleProfile = {
    avatar: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
};
const examplePosts = [
    {
        id: 1,
        title: 'Post Title Three',
        user: {
            id: 1,
            name: 'Elliot Fu',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        },
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600),
        likes: 4,
        dislikes: 2,
        liked: true,
        disliked: false,
        permissions: {like: true, dislike: true, edit: true, delete: true, reply: true},
        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        fullText:
            'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        comments: [],
        commentsCount: 6,
    },
    {
        id: 2,
        title: 'Post Title Three',
        user: {
            id: 1,
            name: 'Elliot Fu',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        },
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600),
        likes: 4,
        dislikes: 2,
        liked: false,
        disliked: true,
        permissions: {like: true, dislike: true, edit: false, delete: false, reply: false},
        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        fullText:
            'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
        comments: [],
        commentsCount: 6,
    },
];
export default class Page extends React.PureComponent {
    render() {
        return (
            <>
                <Container>
                    <Header loggedIn={true}/>
                </Container>
                <Container style={{paddingTop: '7em'}}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <UIHeader>Feed</UIHeader>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={12}>
                                <Posts posts={examplePosts}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Card>
                                    <Card.Content>
                                        <Card.Description>
                                            <div>Reddit &copy; 2020. All rights reserved</div>
                                            <List horizontal divided link size='tiny'>
                                                <List.Item as='a' href='#'>
                                                    Contact Us
                                                </List.Item>
                                                <List.Item as='a' href='#'>
                                                    Terms and Conditions
                                                </List.Item>
                                                <List.Item as='a' href='#'>
                                                    Privacy Policy
                                                </List.Item>
                                            </List>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </>
        );
    }
}