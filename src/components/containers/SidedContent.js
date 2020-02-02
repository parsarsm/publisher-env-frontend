import {Grid, Header as UIHeader} from "semantic-ui-react";
import React from "react";
import Footer from "../sections/Footer";

export default class SidedContent extends React.PureComponent {
    render() {
        const {title, sidebar, children} = this.props;
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <UIHeader>{title}</UIHeader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={12}>
                        {children}
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {sidebar}
                        <Footer/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}