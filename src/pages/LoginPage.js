import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {loginAction} from "../actions/userActions";
import {routes} from "../config/routes";
import FormComponent from "../components/general/FormComponent";

class LoginPage extends FormComponent {
    login() {
        const {username, password} = this.state.form;
        this.props.login(username || '', password || '');
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
                            {this.props.errMessage ? (
                                <Message negative>
                                    <p>{this.props.errMessage}</p>
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
                </Grid.Column>
            </Grid>

        )
    }
}

export default connect(
    (state) => ({
        loading: state.user.loading,
        errMessage: state.user.errMessage,
    }),
    (dispatch) => ({
        login: (username, password) => dispatch(loginAction(username, password))
    })
)(LoginPage);