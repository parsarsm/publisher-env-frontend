import {Button, Comment, Feed, Form, Grid, Header, Icon, Image, Modal} from "semantic-ui-react";
import React from "react";


export default class Posts extends React.Component {
    render() {
        return (
            <Feed>
                {this.props.posts.map(post => (
                    <Feed.Event>
                        <Feed.Label>
                            <img src={post.userAvatar}/>
                        </Feed.Label>
                        <Feed.Content>
                            <Feed.Summary>
                                <Feed.User>{post.userName}</Feed.User> {post.title}
                                <Feed.Date>{post.timeElapsed}</Feed.Date>
                            </Feed.Summary>
                            <Feed.Extra images>
                                {/*{post.images.map(*/}
                                {/*    img => (<a>*/}
                                {/*        <img src={img}/>*/}
                                {/*    </a>)*/}
                                {/*)}*/}
                            </Feed.Extra>
                            <Feed.Extra text>
                                {post.text}
                            </Feed.Extra>
                            <Feed.Meta>
                                <Feed.Like>
                                    <Icon color={"red"} name='like'/>{post.likeNum} Likes
                                </Feed.Like>
                                <Feed.Like>
                                    <Icon color={"black"} name='like'/>{post.dislikeNum} Dislikes
                                </Feed.Like>

                                <DetailedPostModal post={post} trigger={
                                    <Feed.Like>
                                        <Icon color={"grey"} name='comments'/>{post.commentNum} Comments
                                    </Feed.Like>
                                }/>


                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                ))}


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

                            <DetailedPostModal trigger={
                                <Feed.Like>
                                    <Icon name='comments'/>4 Comments
                                </Feed.Like>
                            }/>


                        </Feed.Meta>
                    </Feed.Content>
                </Feed.Event>
            </Feed>)
    }
}

class DetailedPostModal extends React.Component {
    render() {
        let {post, trigger} = this.props;
        console.log(post);
        return (
            <Modal trigger={trigger}>
                <Modal.Header>Post</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='medium'
                           src='https://react.semantic-ui.com/images/wireframe/image.png'
                           wrapped/>


                    <Modal.Description>
                        <Header>Post Title</Header>
                        <p>
                            This is an example of expanded content that will cause the
                            modal's
                            dimmer to scroll This is an example of expanded content that will cause the
                            modal's
                            dimmer to scroll This is an example of expanded content that will cause the
                            modal's
                            dimmer to scroll This is an example of expanded content that will cause the
                            modal's
                            dimmer to scroll
                        </p>

                        <Comment.Group>
                            <Header as='h3' dividing>
                                Comments
                            </Header>

                            <Comment>
                                <Comment.Avatar
                                    src='https://react.semantic-ui.com/images/avatar/small/matt.jpg'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Matt</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Today at 5:42PM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>How artistic!</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Comment>
                                <Comment.Avatar
                                    src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                    <Comment.Metadata>
                                        <div>Yesterday at 12:30AM</div>
                                    </Comment.Metadata>
                                    <Comment.Text>
                                        <p>This has been very useful for my research. Thanks as well!</p>
                                    </Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                                <Comment.Group>
                                    <Comment>
                                        <Comment.Avatar
                                            src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg'/>
                                        <Comment.Content>
                                            <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                            <Comment.Metadata>
                                                <div>Just now</div>
                                            </Comment.Metadata>
                                            <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                            <Comment.Actions>
                                                <Comment.Action>Reply</Comment.Action>
                                            </Comment.Actions>
                                        </Comment.Content>
                                    </Comment>
                                </Comment.Group>
                            </Comment>

                            <Comment>
                                <Comment.Avatar
                                    src='https://react.semantic-ui.com/images/avatar/small/joe.jpg'/>
                                <Comment.Content>
                                    <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                    <Comment.Metadata>
                                        <div>5 days ago</div>
                                    </Comment.Metadata>
                                    <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                    <Comment.Actions>
                                        <Comment.Action>Reply</Comment.Action>
                                    </Comment.Actions>
                                </Comment.Content>
                            </Comment>

                            <Form reply>
                                <Form.TextArea/>
                                <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                            </Form>
                        </Comment.Group>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button primary>
                        Proceed <Icon name='chevron right'/>
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}