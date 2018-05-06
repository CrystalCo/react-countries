import React, {Component} from 'react';
import {connect} from 'react-redux'
import {fetchAllCountries, fetchUserCountries} from '../api'
import ReactCountries from "../components/ReactCountries";
import {setAllCountries, setCountries, setMessage} from "../actions"
import {getMsg, getMsgOpen} from '../reducers'

class App extends Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        // Fetch all countries
        this.props.getAllCountries();
        // "Fetching" user's countries from "DB"
        this.props.getUserCountries();
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
        msgOpen: getMsgOpen(state)
    };
};

const mapDispatchToProps = dispatch => ({
    getAllCountries: () => {
        fetchAllCountries().then(
            allCountriesJson => dispatch(setAllCountries(allCountriesJson)),
            error => console.error(error)
        );
    },
    getUserCountries: () => {
        fetchUserCountries().then(
            userCountries => dispatch(setCountries(userCountries)),
            error => console.error(error)
        );
    },
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

