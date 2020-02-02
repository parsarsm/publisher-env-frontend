import {Card, List} from "semantic-ui-react";
import React from "react";

export default class Footer extends React.PureComponent {
    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Description>
                        <div>Reddit &copy; 2020. All rights reserved</div>
                        <List horizontal divided link size='tiny'>
                            <List.Item as='a' href='#'>
                                Contact Us
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Terms and Conditions
                            </List.Item>
                            <List.Item as='a' href='#'>
                                Privacy Policy
                            </List.Item>
                        </List>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}