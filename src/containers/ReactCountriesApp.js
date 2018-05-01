import React, {Component} from 'react';
import findIndex from 'lodash/findIndex'
import sortedIndexBy from 'lodash/sortedIndexBy'
import remove from 'lodash/remove'
//import math from 'lodash/math';
import CountryUtil from '../utils/CountryUtil'
import ReactCountries from "../components/ReactCountries";

class ReactCountriesApp extends Component {
    state = {
        countries: [],
        allCountries: [],
        allCountriesSuggestion: [],
        onlyVisited: false,

        addCountryDialogOpened: false,
        countryToAdd: '',
        msgOpen: false,
        msg: ''
    };

    /*constructor(props) {
        super(props);
    }*/

    componentDidMount() {
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
    }

    handleOnlyVisitedChange = (onlyVisited) => {
        this.setState({
            onlyVisited: onlyVisited
        });
    };

    handleCountryVisitedChange = (countryCode, visited) => {
        this.setState((prevState, props) => {
            let newState = {countries: [...prevState.countries]};
            newState.countries[findIndex(newState.countries, {'code': countryCode})].visited = visited;
            return newState;
        });
    };

    handleCountryDeleted = (countryCode) => {
        this.setState((prevState, props) => {
            let newState = {countries: [...prevState.countries], msgOpen: true, msg: "Country has been deleted"};
            remove(newState.countries, (country) => country.code === countryCode);
            return newState;
        });
    };

    handleAddCountry = () => {
        if (this.state.countryToAdd) {
            let addCountry = findIndex(this.state.countries, {'code': this.state.countryToAdd}) === -1;
            if (addCountry) {
                this.setState((prevState, props) => {
                    let countryIndex = findIndex(this.state.allCountries, {'alpha3Code': this.state.countryToAdd.toUpperCase()});
                    let country = this.state.allCountries[countryIndex];
                    let newCountry = {
                        code: country.alpha3Code.toLowerCase(),
                        name: country.name,
                        capital: country.capital,
                        visited: false
                    };
                    let newCountries = [...prevState.countries];
                    let newCountryIndex = sortedIndexBy(newCountries, newCountry, 'name');
                    newCountries.splice(newCountryIndex, 0, newCountry);
                    return {countries: newCountries, msgOpen: true, msg: "Country has been added"};
                });
            }

            this.handleCloseAddCountryDialog();
        }
    };

    handleOpenAddCountryDialog = () => {
        this.setState({
            addCountryDialogOpened: true
        })
    };

    handleCloseAddCountryDialog = () => {
        this.setState({
            addCountryDialogOpened: false,
            countryToAdd: ''
        })
    };

    handleCountryToAddChanged = (country) => {
        if (country) {
            this.setState({
                countryToAdd: country.toLowerCase()
            })
        }
    };

    handleMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({msgOpen: false, msg: ''});
    };

    render() {
        const {allCountries, ...other} = this.state;

        return (
            <ReactCountries {...other} handleOpenAddCountryDialog={this.handleOpenAddCountryDialog}
                            handleCountryVisitedChange={this.handleCountryVisitedChange}
                            handleCountryDeleted={this.handleCountryDeleted}
                            handleCloseAddCountryDialog={this.handleCloseAddCountryDialog}
                            handleCountryToAddChanged={this.handleCountryToAddChanged}
                            handleAddCountry={this.handleAddCountry} handleMsgClose={this.handleMsgClose}
                            handleOnlyVisitedChange={this.handleOnlyVisitedChange}/>
        );
    }
}

export default ReactCountriesApp;