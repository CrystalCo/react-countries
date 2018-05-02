import React, {Component} from 'react';
import {connect} from 'react-redux'
import CountryUtil from '../utils/CountryUtil'
import ReactCountries from "../components/ReactCountries";
import {
    addCountry,
    addCountryDialogOpened,
    countryToAddChanged,
    setAllCountries,
    setCountries,
    setMessage
} from "../actions"

class App extends Component {
    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
        // Fetch all countries
        this.props.fetchAllCountries();
        // "Fetching" user's countries from "DB"
        this.props.fetchUserCountries();
    }

    render() {
        return (
            <ReactCountries {...this.props} />
        );
    }
}


const mapStateToProps = state => {
    return {...state};
};

const mapDispatchToProps = dispatch => ({
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    },
    handleCloseAddCountryDialog: () => dispatch(addCountryDialogOpened(false)),
    handleAddCountry: (code, allCountries) => {
        dispatch(addCountry(code, allCountries));

        // TODO
        //dispatch(setMessage("Country has been added"));
        dispatch(addCountryDialogOpened(false))
    },
    handleCountryToAddChanged: country => {
        if (country) {
            dispatch(countryToAddChanged(country.toLowerCase()))
        }
    },
    fetchAllCountries: () => {
        CountryUtil.getAllCountries().then(
            allCountriesJson => dispatch(setAllCountries(allCountriesJson)),
            error => console.error(error)
        );
    },
    fetchUserCountries: () => {
        dispatch(setCountries([
            {code: 'bra', name: 'Brazil', capital: 'Brazilia', visited: false},
            {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true},
            {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false}
        ]))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App)

