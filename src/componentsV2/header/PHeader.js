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
        isLoggedIn: false
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

                    <Dropdown item simple text='Dropdown'>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Header>Header Item</Dropdown.Header>
                            <Dropdown.Item>
                                <i className='dropdown icon'/>
                                <span className='text'>Submenu</span>
                                <Dropdown.Menu>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                    <Dropdown.Item>List Item</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {!this.state.isLoggedIn ? (<>
                            <Menu.Item position="right" as='a'>Sign Up</Menu.Item>
                            <Popup trigger={<Menu.Item as='a'>Log In</Menu.Item>} flowing hoverable>
                                <Grid textAlign='center' style={{height: '30vh'}} verticalAlign='middle'>
                                    <Grid.Column style={{minWidth: 350}}>
                                        <Form size='large'>
                                            <Segment stacked>
                                                <Form.Input fluid icon='user' iconPosition='left'
                                                            placeholder='E-mail address/Username'/>
                                                <Form.Input
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