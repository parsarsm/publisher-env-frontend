import React from 'react'
import {Button, Comment, Container, Feed, Form, Grid, Header, Icon, Image, Input, Menu, Modal} from "semantic-ui-react";
import SearchBar from "../../components/search/Search";
import Posts from "../../components/posts/Posts";


export default class HomePage extends React.Component {
    state = {
        activeItem: 'followed',
        posts: {
            followed: [
                {
                    id: 1,
                    title: 'Post Title Three',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }],
            newest: [
                {
                    id: 1,
                    title: 'Post Title Two',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }, {
                    id: 1,
                    title: 'Post Title Three',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }],
            hottest: [
                {
                    id: 1,
                    title: 'Post Title One ',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    // images: ['https://react.semantic-ui.com/images/wireframe/image.png','https://react.semantic-ui.com/images/wireframe/image.png'],
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: [
                        {
                            id: 1,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: [{
                                id: 1,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
                                userName: 'Matt',
                                time: 'Today at 5:42PM',
                                child: []
                            },
                            ]
                        },
                        {
                            id: 2,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                            userName: 'Matt',
                            time: 'Yesterday at 5:42PM',
                            child: []
                        }, {
                            id: 3,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: [{
                                id: 3,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
                                userName: 'Matt',
                                time: 'Just now',
                                child: []
                            }, {
                                id: 4,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
                                userName: 'Matt',
                                time: 'Today at 5:42PM',
                                child: []
                            },]
                        }, {
                            id: 4,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: []
                        },
                    ]
                }, {
                    id: 1,
                    title: 'Post Title Two',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }, {
                    id: 1,
                    title: 'Post Title Three',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }],
            contributed: [{
                id: 1,
                title: 'Post Title Three',
                userId: 1,
                userName: 'Elliot Fu',
                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                timeElapsed: '2 Hours Ago',
                likeNum: 4,
                dislikeNum: 2,
                commentNum: 6,
                text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                fullText:  // with images!
                    'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                comments: []
            },
                {
                    id: 1,
                    title: 'Post Title Two',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: []
                }, {
                    id: 1,
                    title: 'Post Title One ',
                    userId: 1,
                    userName: 'Elliot Fu',
                    userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                    timeElapsed: '2 Hours Ago',
                    likeNum: 4,
                    dislikeNum: 2,
                    commentNum: 6,
                    // images: ['https://react.semantic-ui.com/images/wireframe/image.png','https://react.semantic-ui.com/images/wireframe/image.png'],
                    text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    fullText:  // with images!
                        'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                    comments: [
                        {
                            id: 1,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: [{
                                id: 1,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/matt.jpg',
                                userName: 'Matt',
                                time: 'Today at 5:42PM',
                                child: []
                            },
                            ]
                        },
                        {
                            id: 2,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                            userName: 'Matt',
                            time: 'Yesterday at 5:42PM',
                            child: []
                        }, {
                            id: 3,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: [{
                                id: 3,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/jenny.jpg',
                                userName: 'Matt',
                                time: 'Just now',
                                child: []
                            }, {
                                id: 4,
                                text: 'How artistic!',
                                userId: 2,
                                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
                                userName: 'Matt',
                                time: 'Today at 5:42PM',
                                child: []
                            },]
                        }, {
                            id: 4,
                            text: 'How artistic!',
                            userId: 2,
                            userAvatar: 'https://react.semantic-ui.com/images/avatar/small/joe.jpg',
                            userName: 'Matt',
                            time: 'Today at 5:42PM',
                            child: []
                        },
                    ]
                }],
        }
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        return (
            <Container>

                <Grid stackable>
                    <Grid.Column width={13}>
                        <Posts posts={this.state.posts} activeItem={this.state.activeItem}/>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <SearchBar/>
                        <Menu pointing secondary vertical>
                            <Menu.Item
                                name='followed'
                                active={activeItem === 'followed'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='newest'
                                active={activeItem === 'newest'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='hottest'
                                active={activeItem === 'hottest'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='contributed'
                                active={activeItem === 'contributed'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                </Grid>
            </Container>

        );
    }

}