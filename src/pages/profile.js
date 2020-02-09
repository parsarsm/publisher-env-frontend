import React from 'react'
import {Button, Card, Container, Feed, Grid, Header, Icon, Image, Input, Menu, Table} from "semantic-ui-react";
import {Tab} from 'semantic-ui-react'
import Posts from "../components/posts/Posts";
import UserCards from "../components/userCards/UserCards";
import ProfileSide from "../components/profileSide/ProfileSide";

const examplePosts = [
    {
        id: 1,
        title: 'Post Title Three',
        user: {
            id: 1,
            name: 'Elliot Fu',
            avatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
        },
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600 * 1000),
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
        createdAt: Date.now() - parseInt(Math.random() * 3 * 3600 * 1000),
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
const exampleFollowers = [
    {
        id: 1,
        image: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
        name: 'Molly Thomas',
        username: 'username',
        description: ' We\'re always circling back to where we\'d we started'
    },
    {
        id: 2,
        image: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
        name: 'Molly Thomas',
        username: 'username',
        description: ' We\'re always circling back to where we\'d we started'
    },
    {
        id: 3,
        image: 'https://react.semantic-ui.com/images/avatar/large/molly.png',
        name: 'Molly Thomas',
        username: 'username',
        description: ' We\'re always circling back to where we\'d we started'
    }
];
const exampleProfileData = {
    name: 'Matthew',
    image: 'https://react.semantic-ui.com/images/avatar/large/matthew.png',
    username: 'matth1244',
    description: "I'm a musician living in Nashville.",
    birthday: '13, march 1999',
    posts: 145,
    comments: 14,
    followings: 63,
    followers: 94,
};

export default class Profile extends React.Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    panes = [
        {
            menuItem: 'Posts',
            render: () => <Tab.Pane attached={false}>
                <Posts posts={examplePosts}/>
            </Tab.Pane>,
        },
        {
            render: () => <Tab.Pane attached={false}>
                <UserCards cards={exampleFollowers}/>
            </Tab.Pane>,
            menuItem: 'Followers',
        },
        {
            menuItem: 'Followings',
            render: () => <Tab.Pane attached={false}>
                <UserCards cards={exampleFollowers}/>
            </Tab.Pane>,
        },
    ];

    render() {
        return (
            <Container>

                <Grid stackable>
                    <Grid.Column width={12}>
                        <Tab menu={{secondary: true, pointing: true}} panes={this.panes}/>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <ProfileSide profile={exampleProfileData}/>
                    </Grid.Column>
                </Grid>
            </Container>

        );
    }

}