import React from 'react'
import {Button, Divider, Header, Icon, Image, Modal, Segment} from 'semantic-ui-react'
import MarkdownEditor from "../markdownEditor/MarkdownEditor";
import {Tab} from 'semantic-ui-react'
import ImageUploader from "../imageUploader/ImageUploader";

const panes = [
    {menuItem: 'Tab 1', render: () => <MarkdownEditor/>},
    {menuItem: 'Tab 2', render: () => (<ImageUploader/>)},
];

export default class PostModal extends React.PureComponent {

    render() {
        const {trigger} = this.props;
        return (
            <Modal
                trigger={trigger}
            >
                <Modal.Header>Profile Picture</Modal.Header>
                <Modal.Content image>
                    <Tab menu={{fluid: true, vertical: true, tabular: 'right'}} panes={panes}/>
                </Modal.Content>
                <Modal.Actions>
                    <Button>
                        Exit
                    </Button>
                    <Button positive>
                        Post <Icon name='right chevron'/>
                    </Button>
                </Modal.Actions></Modal>
        )
    }
}

