import React from 'react'
import {Form, Input, TextArea, Button, Select, Header, Icon, Segment, Image, Message, Dropdown} from 'semantic-ui-react'
import {InputFile} from 'semantic-ui-react-input-file'

const genderOptions = [
    {key: 'm', text: 'Male', value: 'male'},
    {key: 'f', text: 'Female', value: 'female'},
    {key: 'o', text: 'Other', value: 'other'},
]

const countryOptions = [
    {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
    {key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands'},
    {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
    {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
    {key: 'as', value: 'as', flag: 'as', text: 'American Samoa'},
    {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
    {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
    {key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla'},
    {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua'},
    {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
    {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
    {key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba'},
    {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
    {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
    {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
    {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
    {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
    {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
    {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
    {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
    {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
    {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
    {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
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
                            <Form.Field required
                                        id='form-input-control-username'
                                        control={Input}
                                        label='Username'
                                        placeholder='username'
                            />
                            <Form.Input label='Password' type='password' required/>
                        </Form.Group>

                        <Form.Group widths='equal'>
                            <Form.Field required
                                        id='form-input-control-first-name'
                                        control={Input}
                                        label='First name'
                                        placeholder='First name'
                            />
                            <Form.Field required
                                        id='form-input-control-last-name'
                                        control={Input}
                                        label='Last name'
                                        placeholder='Last name'
                            />
                            <Form.Field required
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
                            <label>Country</label>
                            <Dropdown
                                placeholder='Select Country'
                                fluid
                                search
                                selection
                                options={countryOptions}
                            />
                        </Form.Field>


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
                                <Button fluid>
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
