import React from "react";
import {Button, Form, Grid, Header, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {loginAction} from "../actions/userActions";
import FormComponent from "../components/general/FormComponent";

class ForgotPasswordPage extends FormComponent {
    sendRecover() {
        const {email} = this.state.form;
        this.props.login(email);
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
                            <Form.Input fluid icon='email' iconPosition='left' placeholder='Email'
                                        name={'email'} onChange={this.onFormInput('email')}/>
                            <Button color='black' fluid size='large' onClick={() => this.sendRecover()}>
                                Login
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
        login: (username, password) => dispatch(loginAction(username, password))
    })
)(ForgotPasswordPage);