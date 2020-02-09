import React from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import FormComponent from "../components/general/FormComponent";
import {signupAction} from "../actions/userActions";

class SignUpPage extends FormComponent {
    state = {};

    login() {
        const {username, password, email, fullName} = this.state.form;
        this.props.signup({username, password, email, fullName});
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='grey' textAlign='center'>
                        Signup
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' name={'username'} iconPosition='left' placeholder='Username'
                                        onChange={this.onFormInput('username')}/>
                            <Form.Input
                                fluid
                                name={'password'}
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                onChange={this.onFormInput('password')}
                            />
                            <Form.Input fluid icon='mail' name={'email'} iconPosition='left' placeholder='Email'
                                        onChange={this.onFormInput('email')} type={"email"}/>
                            <Form.Input fluid name={'fullName'} placeholder='Full Name'
                                        onChange={this.onFormInput('fullName')}/>
                            <Button color='black' fluid size='large' onClick={() => this.signup()}>
                                Sign up
                            </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
        )
    }
}

export default connect(
    null,
    (dispatch) => ({
        signup: (signupData) => dispatch(signupAction(signupData))
    })
)(SignUpPage);