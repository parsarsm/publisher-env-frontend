import React from "react";
import {Button, Form, Grid, Header, Message, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {loginAction} from "../actions/userActions";
import FormComponent from "../components/general/FormComponent";
import {resetPassAction} from "../actions/resetPassActions";

class ForgotPasswordPage extends FormComponent {
    sendRecover() {
        const {username} = this.state.form;
        this.props.resetPass(username);
    }

    render() {
        return (
            <Grid textAlign='center' style={{height: '100vh'}}>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='grey' textAlign='center'>
                        Reset your password
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            {this.props.successfulResetPass ? (
                                <Message positive>
                                    <p> We emailed you a new password.</p>
                                </Message>
                            ) : ''}
                            {this.props.failedResetPass ? (
                                <Message negative>
                                    <p> {this.props.detail} </p>
                                </Message>
                            ) : ''}
                            <Message>
                                <Message.Header>Don't worry!</Message.Header>
                                <Message.List>
                                    <Message.Item> You may have forgotten your password, but we can help you
                                        out.</Message.Item>
                                    <Message.Item> Enter your username below and we'll email you a link to reset your
                                        password.</Message.Item>
                                    <Message.Item>You can change your password after logging in using your new
                                        password. </Message.Item>
                                </Message.List>
                            </Message>
                            <Form.Input fluid icon='username' iconPosition='left' placeholder='Username'
                                        name={'username'} onChange={this.onFormInput('username')}/>
                            <Button color='black' fluid size='large' loading={this.props.loading}
                                    onClick={() => this.sendRecover()}>
                                Reset password
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
        loading: state.resetPass.loading,
        failedResetPass: state.resetPass.failedResetPass,
        successfulResetPass: state.resetPass.successfulResetPass,
        detail: state.resetPass.detail
    }),
    (dispatch) => ({
        resetPass: (username, password) => dispatch(resetPassAction(username))
    })
)(ForgotPasswordPage);