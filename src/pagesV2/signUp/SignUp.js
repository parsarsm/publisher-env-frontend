import React from 'react'
import {Form, Input, TextArea, Button, Select, Header, Icon, Segment, Image, Message} from 'semantic-ui-react'
import {InputFile} from 'semantic-ui-react-input-file'

const genderOptions = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

export default class signUp extends React.Component {
    handleUpload = () => '';

    render() {
        return (
            <div>
                <Header as='h2' attached={"top"} block>
                    <Icon name='signup'/>
                    <Header.Content>Sign Up</Header.Content>
                </Header>


                <Segment attached>
                    <Form>
                        <Form.Group widths={"equal"}>
                            <Form.Field
                                id='form-input-control-username'
                                control={Input}
                                label='Username'
                                placeholder='username'
                            />
                            <Form.Input label='Password' type='password'/>
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='First name'
                                placeholder='First name'
                            />
                            <Form.Field
                                id='form-input-control-last-name'
                                control={Input}
                                label='Last name'
                                placeholder='Last name'
                            />
                            <Form.Field
                                control={Select}
                                options={genderOptions}
                                label={{children: 'Gender', htmlFor: 'form-select-control-gender'}}
                                placeholder='Gender'
                                search
                                searchInput={{id: 'form-select-control-gender'}}
                            />
                        </Form.Group>

                        {/*<Form.Group>*/}

                        <Form.Field>
                            <label>Avatar</label>
                            <Image src='https://react.semantic-ui.com/images/wireframe/white-image.png' size='medium'
                                   bordered/>
                        </Form.Field>
                        <Form.Field>
                            <InputFile
                                button={{content: 'Upload', icon: 'image', labelPosition: 'left'}}
                                input={{
                                    id: 'input-control-id',
                                    onChange: this.handleUpload
                                }}
                            />
                        </Form.Field>
                        {/*</Form.Group>*/}
                        <Form.Field
                            id='form-textarea-control-description'
                            control={TextArea}
                            label='Description'
                            placeholder='description'
                        />
                        <Form.Field
                            id='form-input-control-email'
                            control={Input}
                            label='Email'
                            placeholder='joe@schmoe.com'
                            //     error={{
                            //         content: 'Please enter a valid email address',
                            //         pointing: 'below',
                            //     }
                            // }
                        />

                        <Form.Group>
                            <Form.Field>
                                <Button  fluid>
                                    Sign Up
                                </Button>
                            </Form.Field>
                            <Form.Field>
                                <Button color='google plus' fluid>
                                    <Icon name='google'/> Sign Up with Google
                                </Button>
                            </Form.Field>
                        </Form.Group>
                    </Form>
                </Segment>
            </div>

        )

    }
}
