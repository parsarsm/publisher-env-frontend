import React, {Component} from 'react'
import {
    Button,
    Container,
    Dropdown,
    Form,
    Grid,
    Image,
    Menu,
    Message,
    Popup,
    Segment,
    Header,
    Icon
} from 'semantic-ui-react'
import logo from '../../static/pics/logo.svg'

export default class PHeader extends Component {
    state = {
        isLoggedIn: false,
        notification: {
            newFollowers: [
                {
                    id: 1,
                    name: 'Payam Mohammadi'
                },
                {
                    id: 2,
                    name: 'Aryan Sadeghi'
                }
            ],
            newComments: [
                {
                    postId: 1,
                    postTitle: 'Some post title',
                    usersNames: ['Akbar Ganji', 'Imam Khomeyni'] // users who commented (new) under this post
                },
                {
                    postId: 2,
                    postTitle: 'Some other post title !',
                    usersNames: ['Trump', 'Jeremy Clarkson', 'James May', 'Richard Hammond'] // users who commented (new) under this post
                }
            ]
        }
    };

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                        <Image size='mini' src={logo} style={{marginRight: '1.5em'}}/>
                        Publisher
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>

                    <Notification {...this.state.notification}/>
                    {!this.state.isLoggedIn ? (<>
                            <Menu.Item position="right" as='a'>Sign Up</Menu.Item>
                            <Popup trigger={<Menu.Item as='a'>Log In</Menu.Item>} flowing hoverable>
                                <Grid textAlign='center' style={{height: '30vh'}} verticalAlign='middle'>
                                    <Grid.Column style={{minWidth: 350}}>
                                        <Form size='large'>
                                            <Segment stacked>
                                                <Form.Input fluid icon='user' iconPosition='left'
                                                            placeholder='E-mail address/Username' required/>
                                                <Form.Input required
                                                            fluid
                                                            icon='lock'
                                                            iconPosition='left'
                                                            placeholder='Password'
                                                            type='password'
                                                />

                                                <Button color='blue' fluid size='large'>
                                                    Login
                                                </Button>

                                            </Segment>
                                        </Form>
                                        <Message>
                                            <Button color='google plus' fluid size='large'>
                                                <Icon name='google'/> Sign In with Google
                                            </Button>
                                        </Message>
                                    </Grid.Column>
                                </Grid>
                            </Popup>
                        </>) :
                        (
                            <Menu.Item position="right" as='a'>Log Out</Menu.Item>

                        )}

                </Container>
            </Menu>
        )
    }
}

function Notification(props) {
    return (
        <Dropdown item simple text='Notifications'>
            <Dropdown.Menu>
                <Dropdown.Header>New Followers</Dropdown.Header>
                <Dropdown.Item>
                    <i className='dropdown icon'/>
                    <span className='text'>People</span>
                    <Dropdown.Menu>
                        {props.newFollowers.map((follower) => (
                            <Dropdown.Item> Follower 1</Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Header>New Comments</Dropdown.Header>
                {props.newComments.map((post) => (
                    <Dropdown.Item>
                        <i className='dropdown icon'/>
                        <span className='text'>{post.postTitle}</span>
                        <Dropdown.Menu>
                            {post.usersNames.map(
                                (name) => (<Dropdown.Item>{name}</Dropdown.Item>
                                )
                            )}
                        </Dropdown.Menu>
                    </Dropdown.Item>
                ))}

            </Dropdown.Menu>
        </Dropdown>

    )
}