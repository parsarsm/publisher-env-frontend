import React from 'react'
import {Button, Form, Header, Icon, Segment, Select} from "semantic-ui-react";
import TextEditor from "../../componentsV2/richTextEditor/TextEditor";

export default class Post extends React.Component {

    genderOptions = [
        {key: 'm', text: 'Male', value: 'male'},
        {key: 'f', text: 'Female', value: 'female'},
        {key: 'o', text: 'Other', value: 'other'},
    ]


    render() {
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
                        <TextEditor/>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </Segment>
            </div>

        )
    }
}