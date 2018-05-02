import React, {Component} from 'react';
import { connect } from 'react-redux'
import findIndex from 'lodash/findIndex'
import sortedIndexBy from 'lodash/sortedIndexBy'
import remove from 'lodash/remove'
//import math from 'lodash/math';
import CountryUtil from '../utils/CountryUtil'
import ReactCountries from "../components/ReactCountries";
import {addCountryDialogOpened, toggleCountry, removeCountry, setMessage, setOnlyVisited, addCountry, setCountries, countryToAddChanged} from "../actions"

class ReactCountriesApp extends Component {
    /*state = {
        countries: [],

        allCountries: [],
        allCountriesSuggestion: [],

        onlyVisited: false,
        addCountryDialogOpened: false,
        countryToAdd: '',
        msgOpen: false,
        msg: ''
    };*/

    /*constructor(props) {
        super(props);
    }*/

    // TODO
    /*componentDidMount() {
        // "Fetching" user's countries from "DB"
        this.setState({
            countries: [
                {code: 'bra', name: 'Brazil', capital: 'Brazilia', visited: false},
                {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true},
                {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false}
            ]
        });

        CountryUtil.getAllCountries().then(
            allCountriesJson =>
                this.setState({
                    allCountries: allCountriesJson,
                    allCountriesSuggestion: allCountriesJson.map(country => ({
                        value: country.alpha3Code.toLowerCase(),
                        label: country.name
                    }))
                }),
            error => console.error(error)
        );
    }*/

    /*render() {
        return (
            <ReactCountries />
        );
    }*/
}


const mapStateToProps = state => {
    //console.log(`ReactCountriesApp: ${JSON.stringify(state)}`);

    return {...state};
};

const mapDispatchToProps = dispatch => ({
    handleOpenAddCountryDialog: () => dispatch(addCountryDialogOpened(true)),
    handleCountryVisitedChange: code => dispatch(toggleCountry(code)),
    handleCountryDeleted: code => {
        dispatch(removeCountry(code));
        dispatch(setMessage("Country has been deleted"))
    },
    handleOnlyVisitedChange: onlyVisited => dispatch(setOnlyVisited(onlyVisited)),
    handleMsgClose: (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setMessage(''));
    },
    handleCloseAddCountryDialog: () => dispatch(addCountryDialogOpened(false)),
    handleAddCountry: (code, allCountries) => {
        dispatch(addCountry(code, allCountries));

        //dispatch(setMessage("Country has been added"));
        dispatch(addCountryDialogOpened(false))
    },
    handleCountryToAddChanged: country => {
        if (country) {
            dispatch(countryToAddChanged(country.toLowerCase()))
        }
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReactCountries)

