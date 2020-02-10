import _ from 'lodash'
import faker from 'faker'
import React, {Component} from 'react'
import {Search} from 'semantic-ui-react'
import {connect} from "react-redux";
import {searchAction} from "../../actions/searchActions";

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}));


class PSearch extends Component {

    state = {value: ''};

    search() {
        const {value} = this.state;
        this.props.search(value);
    }

    handleResultSelect = (e, {result}) =>
        // redirect by type and id
        this.setState({value: result.title}
        );

    handleSearchChange = (e, {value}) => {
        this.setState({value: value});
        this.search();
    };

    render() {
        const {loading, result} = this.props;
        // console.log(this.props);

        return (
            <Search
                fluid={true}
                loading={loading}
                onResultSelect={this.handleResultSelect}
                onSearchChange={_.debounce(this.handleSearchChange, 500, {
                    leading: true,
                })}
                results={source}
                value={this.state.value}
                {...this.props}
            />
        )
    }
}

export default connect(
    (state) => ({
        loading: state.search.loading,
        detail: state.search.result,
    }),
    (dispatch) => ({
        search: (value) => dispatch(searchAction(value))
    })
)(PSearch);