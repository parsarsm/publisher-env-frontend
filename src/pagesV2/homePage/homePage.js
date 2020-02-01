import React from 'react'
import {Button, Comment, Container, Feed, Form, Grid, Header, Icon, Image, Input, Menu, Modal} from "semantic-ui-react";
import SearchBar from "../../componentsV2/search/Search";
import Posts from "../../componentsV2/posts/Posts";


export default class HomePage extends React.Component {
    state = {
        activeItem: 'home',
        posts: [
            {
                id: 1,
                title: 'Post Title',
                userId: 1,
                userName: 'Elliot Fu',
                userAvatar: 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg',
                timeElapsed: '2 Hours',
                likeNum: 4,
                dislikeNum: 2,
                commentNum: 6,
                comments: [],
                // images: ['https://react.semantic-ui.com/images/wireframe/image.png','https://react.semantic-ui.com/images/wireframe/image.png'],
                text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.',
                fullText:  // with images!
                    'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started, then starting all over again. Even if we don\'t run extra laps that day, we surely will come back for more of the same another day soon.'
            }
        ]
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;

        return (
            <Container>

                <Grid stackable>
                    <Grid.Column width={13}>
                        <Posts posts={this.state.posts}/>
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <SearchBar/>
                        <Menu pointing secondary vertical>
                            <Menu.Item
                                name='home'
                                active={activeItem === 'home'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='messages'
                                active={activeItem === 'messages'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='friends'
                                active={activeItem === 'friends'}
                                onClick={this.handleItemClick}
                            />
                        </Menu>
                    </Grid.Column>
                </Grid>
            </Container>

        );
    }

}