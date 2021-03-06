import React, {Component} from 'react';
import {connect} from 'react-redux'
import ReactCountries from "../components/ReactCountries";
import {fetchCountriesSuggestion, fetchUserCountries, setMessage} from "../actions"
import {getMsg, getMsgOpen, getOnlyVisited} from '../reducers'

class ReactCountriesContainer extends Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {onlyVisited, getCountriesSuggestion, getUserCountries} = this.props;
        getCountriesSuggestion();
        getUserCountries(onlyVisited);
    }

    render() {
        return (
            <ReactCountries {...this.props} />
        );
    }
}

const mapStateToProps = state => {
    return {
        msg: getMsg(state),
        msgOpen: getMsgOpen(state),
        onlyVisited: getOnlyVisited(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getCountriesSuggestion: () => dispatch(fetchCountriesSuggestion()),
    getUserCountries: (onlyVisited) => dispatch(fetchUserCountries(onlyVisited)),
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactCountriesContainer)