import React from 'react'
import PHeader from "../../componentsV2/header/PHeader";
import {Container, Feed, Grid, Icon, Input, Menu} from "semantic-ui-react";
import SearchBar from "../../componentsV2/search/Search";


export default class HomePage extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Container>

                <Grid stackable>
                    <Grid.Column width={13}>
                        <Feed>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                        <Feed.Date>1 Hour Ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a>
                                            <img src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                                        </a>
                                        <a>
                                            <img src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                                        </a>
                                    </Feed.Extra>
                                    <Feed.Extra text>
                                        Ours is a life of constant reruns. We're always circling back to where
                                        we'd we started, then starting all over again. Even if we don't run
                                        extra laps that day, we surely will come back for more of the same
                                        another day soon.
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like'/>4 Likes
                                        </Feed.Like>
                                        <Feed.Like>
                                            <Icon name='comments'/>4 Comments
                                        </Feed.Like>

                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>
                            <Feed.Event>
                                <Feed.Label>
                                    <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                </Feed.Label>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                        <Feed.Date>1 Hour Ago</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra images>
                                        <a>
                                            <img src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                                        </a>
                                        <a>
                                            <img src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                                        </a>
                                    </Feed.Extra>
                                    <Feed.Extra text>
                                        Ours is a life of constant reruns. We're always circling back to where
                                        we'd we started, then starting all over again. Even if we don't run
                                        extra laps that day, we surely will come back for more of the same
                                        another day soon.
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='like'/>4 Likes
                                        </Feed.Like>
                                        <Feed.Like>
                                            <Icon name='comments'/>4 Comments
                                        </Feed.Like>

                                    </Feed.Meta>
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
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