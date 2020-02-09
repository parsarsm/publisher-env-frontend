import React from 'react';
import {Button, Card, Header, Icon, Image, Table} from "semantic-ui-react";


export default class ProfileSide extends React.PureComponent {

    render() {
        const {profile} = this.props;
        return (
            <Card>
                <Image src={profile.image} wrapped
                       ui={false}/>
                <Card.Content>
                    <Card.Header>{profile.name}</Card.Header>
                    <Card.Meta>
                        <span className='date'>{profile.username}</span>
                    </Card.Meta>
                    <Card.Description>
                        {profile.description}
                    </Card.Description>
                    <Table basic='very' celled collapsing size={"large"}>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Icon name={'birthday cake'}/>
                                        <Header.Content>
                                            <Header.Subheader>Birth day</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{profile.birthday}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Icon name={'pencil'}/>
                                        <Header.Content>
                                            <Header.Subheader>Posts</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{profile.posts}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Icon name={'comments'}/>
                                        <Header.Content>
                                            <Header.Subheader>Comments</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{profile.comments}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Icon name={"users"}/>
                                        <Header.Content>
                                            <Header.Subheader>Followings</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{profile.followings}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Icon name={"users"}/>
                                        <Header.Content>
                                            <Header.Subheader>Followers</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>{profile.followers}</Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table>
                </Card.Content>
                <Card.Content extra>
                    <Button.Group vertical labeled icon fluid>
                        <Button icon='pencil' content='New Post'/>
                        <Button icon='setting' content='Settings'/>
                    </Button.Group>
                </Card.Content>
                <div className="ui bottom attached button">
                    <i className="add icon"/>
                    Follow
                </div>
            </Card>
        );
    }


}