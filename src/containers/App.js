import React, {Component} from 'react';
import {connect} from 'react-redux'
import ReactCountries from "../components/ReactCountries";
import {fetchAllCountries, fetchUserCountries, requestUserCountries, setMessage} from "../actions"
import {getMsg, getMsgOpen, getOnlyVisited} from '../reducers'

class App extends Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const {onlyVisited, getAllCountries, getUserCountries, requestUserCountries} = this.props;

        getAllCountries();

        requestUserCountries();
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
    getAllCountries: () => dispatch(fetchAllCountries()),
    requestUserCountries: () => dispatch(requestUserCountries()),
    getUserCountries: (onlyVisited) => dispatch(fetchUserCountries(onlyVisited)),
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)