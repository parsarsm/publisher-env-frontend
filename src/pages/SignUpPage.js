import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import FormComponent from "../components/general/FormComponent";
import {signupAction} from "../actions/userActions";

class SignUpPage extends FormComponent {
    state = {};

    signup() {
        console.log('hiiiiiii');
        const {username, password, email, firstName, lastName} = this.state.form;
        this.props.signup({username, password, email, firstName, lastName});
    }

    hello(){
        console.log('hi');
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
                            {this.props.errMessage ? (
                                <Message negative>
                                    <p>{this.props.errMessage}</p>
                                </Message>
                            ) : ''}
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
                            <Form.Input fluid name={'firstName'} placeholder='First Name'
                                        onChange={this.onFormInput('firstName')} icon={'first_name'}/>
                            <Form.Input fluid name={'lastName'} placeholder='Last Name'
                                        onChange={this.onFormInput('lastName')} icon={'last_name'}/>

                            <Button color='black' fluid size='large' loading={this.props.loading}
                                    onClick={() => this.signup()}>
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
    (state) => ({
        loading: state.user.loading,
        errMessage: state.user.message,

    }),
    (dispatch) => ({
        signup: (signupData) => dispatch(signupAction(signupData))
    })
)(SignUpPage);