import React from 'react'
import {Button, Divider, Dropdown, Form, Header, Icon, Segment, Select} from "semantic-ui-react";
import {Editor} from 'react-draft-wysiwyg';
import {EditorState} from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default class Post extends React.Component {

    state = {editorState: EditorState.createEmpty(),}
    genderOptions = [
        {key: 'm', text: 'Male', value: 'male'},
        {key: 'f', text: 'Female', value: 'female'},
        {key: 'o', text: 'Other', value: 'other'},
    ]

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Header as='h2' attached={"top"} block>
                    <Icon name='pencil'/>
                    <Header.Content>Post</Header.Content>
                </Header>


                <Segment attached>

                    <Form unstackable>
                        <Form.Group widths={2}>
                            <Form.Input label='Title' placeholder='Title' required/>
                            <Form.Field required
                                        control={Select}
                                        options={this.genderOptions}
                                        label={{children: 'Gender', htmlFor: 'form-select-control-gender'}}
                                        placeholder='Gender'
                                        search
                                        searchInput={{id: 'form-select-control-gender'}}
                            />
                        </Form.Group>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            onEditorStateChange={this.onEditorStateChange}
                            toolbar={{image: {
                                    urlEnabled: true,
                                    uploadEnabled: true,
                                    alignmentEnabled: true,
                                    uploadCallback: true,
                                    previewImage: false,
                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                    alt: { present: false, mandatory: false },
                                    defaultSize: {
                                        height: 'auto',
                                        width: 'auto',
                                    },
                                },}}
                        />
                        <Divider />
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>

        )
    }
}