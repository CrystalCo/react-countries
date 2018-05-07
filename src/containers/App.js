import React, {Component} from 'react';
import {connect} from 'react-redux'
import ReactCountries from "../components/ReactCountries";
import {fetchAllCountries, fetchUserCountries, setMessage} from "../actions"
import {getMsg, getMsgOpen} from '../reducers'

class App extends Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        this.props.getAllCountries();
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
    getAllCountries: () => dispatch(fetchAllCountries()),
    getUserCountries: () => dispatch(fetchUserCountries()),
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)