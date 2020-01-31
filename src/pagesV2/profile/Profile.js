import React from 'react'
import PHeader from "../../componentsV2/header/PHeader";
import {Button, Card, Container, Feed, Grid, Header, Icon, Image, Input, Menu, Table} from "semantic-ui-react";
import {Tab} from 'semantic-ui-react'

import SearchBar from "../../componentsV2/search/Search";


export default class Profile extends React.Component {
    state = {activeItem: 'home'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});
    panes = [
        {
            menuItem: 'Posts',
            render: () => <Tab.Pane attached={false}><Feed>
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
            </Feed></Tab.Pane>,
        },
        {
            menuItem: 'Followers',
            render: () => <Tab.Pane attached={false}><Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Remove
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Remove
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Remove </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group></Tab.Pane>,
        },
        {
            menuItem: 'Followings',
            render: () => <Tab.Pane attached={false}><Card.Group>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Unfollow
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Unfollow
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                        />
                        <Card.Header>Molly Thomas</Card.Header>
                        <Card.Meta>New User</Card.Meta>
                        <Card.Description>
                            Molly wants to add you to the group <strong>musicians</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='red'>
                                Unfollow
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group></Tab.Pane>,
        },
    ];

    render() {
        const {activeItem} = this.state

        return (
            <Container>

                <Grid stackable>
                    <Grid.Column width={12}>
                        <Tab menu={{secondary: true, pointing: true}} panes={this.panes}/>
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped
                                   ui={false}/>
                            <Card.Content>
                                <Card.Header>Matthew</Card.Header>
                                <Card.Meta>
                                    <span className='date'>Joined in 2015</span>
                                </Card.Meta>
                                <Card.Description>
                                    Matthew is a musician living in Nashville.
                                </Card.Description>
                                <Table basic='very' celled collapsing size={"large"}>
                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header as='h4' image>
                                                    <Icon name={'birthday cake'}/>
                                                    <Header.Content>
                                                        <Header.Subheader>Birth day</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>13, march 1999</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header as='h4' image>
                                                    <Icon name={'pencil'}/>
                                                    <Header.Content>
                                                        <Header.Subheader>Posts</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>145</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header as='h4' image>
                                                    <Icon name={'comments'}/>
                                                    <Header.Content>
                                                        <Header.Subheader>Comments</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>15</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header as='h4' image>
                                                    <Icon name={"users"}/>
                                                    <Header.Content>
                                                        <Header.Subheader>Followings</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>63</Table.Cell>
                                        </Table.Row>
                                        <Table.Row>
                                            <Table.Cell>
                                                <Header as='h4' image>
                                                    <Icon name={"users"}/>
                                                    <Header.Content>
                                                        <Header.Subheader>Followers</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                            </Table.Cell>
                                            <Table.Cell>94</Table.Cell>
                                        </Table.Row>

                                    </Table.Body>
                                </Table>
                            </Card.Content>
                            <Card.Content extra>
                                <Button.Group vertical labeled icon fluid>
                                    <Button icon='pencil' content='New Post'/>
                                    <Button icon='setting' content='Settings'/>
                                </Button.Group>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid>
            </Container>

        );
    }

}