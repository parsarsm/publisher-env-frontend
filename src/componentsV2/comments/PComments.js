import React from 'react';
import {Button, Comment, Form, Header} from "semantic-ui-react";


export default class PComments extends React.Component {


    render() {
        // console.log(this.props);
        return (<Comment.Group>
                <Header as='h3' dividing>
                    Comments
                </Header>

                {this.props.comments.map(comment => this.req(comment))}


                <Form reply>
                    <Form.TextArea/>
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                </Form>
            </Comment.Group>
        );
    }


    req(props) {
        return (
            <Comment>
                <Comment.Avatar
                    src={props.userAvatar}/>
                <Comment.Content>
                    <Comment.Author as='a'>{props.userName}</Comment.Author>
                    <Comment.Metadata>
                        <div>{props.time}</div>
                    </Comment.Metadata>
                    <Comment.Text>{props.text}</Comment.Text>
                    <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                    </Comment.Actions>
                </Comment.Content>
                {!props.child.length > 0 ? '' : (
                    <Comment.Group>
                        {props.child.map(comment => this.req(comment))}
                    </Comment.Group>
                )}
            </Comment>
        )
    }
}
