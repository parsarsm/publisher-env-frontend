import React from "react";
import {Button, Form, Grid, Header, Icon, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {loginAction} from "../actions/userActions";
import {routes} from "../config/routes";
import FormComponent from "../components/general/FormComponent";
import GoogleLogin from 'react-google-login';

class LoginPage extends FormComponent {
    login() {
        const {username, password} = this.state.form;
        this.props.login(username || '', password || '');
    }


    responseGoogle(response) {
        console.log(response);
    }

    render() {
        return (

            <Grid textAlign='center' style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='grey' textAlign='center'>
                        Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            {this.props.failedLogin ? (
                                <Message negative>
                                    <p>Username or Password is wrong!</p>
                                </Message>
                            ) : ''}

                            <Form.Input fluid icon='user' iconPosition='left' placeholder='Username'
                                        name={'username'} onChange={this.onFormInput('username')}/>
                            <Form.Input fluid
                                        icon='lock'
                                        iconPosition='left'
                                        type='password'
                                        name={'password'}
                                        placeholder='Password'
                                        onChange={this.onFormInput('password')}
                            />
                            <Button color='black' fluid size='large' onClick={() => this.login()}
                                    loading={this.props.loading}>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to={routes.USER_SIGN_UP}>Sign Up</Link>
                    </Message>

                    <Message>
                        <GoogleLogin
                            clientId="122588552894-qegdkunotqv70434ehld75oq70j1ko4g.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button color='google plus' onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}>
                                    <Icon name='google'/> Sign in with Google
                                </Button>
                            )}
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            // cookiePolicy={'single_host_origin'}
                        />,
                    </Message>

                </Grid.Column>
            </Grid>

        )
    }
}

export default connect(
    (state) => ({
        loading: state.user.loading,
        errMessage: state.user.message,
        failedLogin: state.user.failedLogin,

    }),
    (dispatch) => ({
        login: (username, password) => dispatch(loginAction(username, password))
    })
)(LoginPage);