import {Button, Comment, Feed, Form, Grid, Header, Icon, Image, Modal} from "semantic-ui-react";
import React from "react";
import PComments from "../comments/PComments";


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

                                <Modal trigger={ <Feed.Like>
                                    <Icon color={"grey"} name='comments'/>{post.commentNum} Comments
                                </Feed.Like>}>
                                    <Modal.Header>Post</Modal.Header>
                                    <Modal.Content image scrolling>
                                        <Image size='medium'
                                               src={post.userAvatar}
                                               wrapped/>
                                        <Modal.Description>
                                            <Header>{post.title}</Header>
                                            <p>
                                                {post.fullText}
                                            </p>
                                            <PComments comments={post.comments}/>
                                        </Modal.Description>
                                    </Modal.Content>
                                    <Modal.Actions>
                                        <Button primary>
                                            Proceed <Icon name='chevron right'/>
                                        </Button>
                                    </Modal.Actions>
                                </Modal>


                            </Feed.Meta>
                        </Feed.Content>
                    </Feed.Event>
                ))}

            </Feed>)
    }
}


