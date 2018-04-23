import React, {Component, Fragment} from 'react';
import './ReactCountries.css';
import './RotatingEarth';
import RotatingEarth from "./RotatingEarth";
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import findIndex from 'lodash/findIndex'
import sortedIndexBy from 'lodash/sortedIndexBy'
import remove from 'lodash/remove'
//import math from 'lodash/math';
import CountryUtil from '../utils/CountryUtil'
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import RcAddCountryDialog from "./RcAddCountryDialog";
import RcList from "./RcList";
import RcToolbar from "./RcToolbar";

class ReactCountries extends Component {
    state = {
        countries: [],
        allCountries: [],
        countrySuggestions: [],
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
                    countrySuggestions: allCountriesJson.map(country => ({
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

    handleMsgClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({msgOpen: false, msg: ''});
    };

    render() {
        return (
            <Fragment>
                <Paper className="RC" elevation={4}>
                    <RotatingEarth/>
                    <RcToolbar onlyVisited={this.state.onlyVisited} onOnlyVisitedChange={this.handleOnlyVisitedChange} onDialogOpen={this.handleOpenAddCountryDialog}/>
                    <RcList countries={this.state.countries} onlyVisited={this.state.onlyVisited} onCountryVisitedChange={this.handleCountryVisitedChange} onCountryDeleted={this.handleCountryDeleted}/>
                    <RcAddCountryDialog open={this.state.addCountryDialogOpened}
                                        suggestions={this.state.countrySuggestions}
                                        onDialogClose={this.handleCloseAddCountryDialog}
                                        countryToAdd={this.state.countryToAdd}
                                        onCountryToAddChanged={this.handleCountryToAddChanged}
                                        onCountryAdd={this.handleAddCountry}/>
                </Paper>
                <Snackbar
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                    open={this.state.msgOpen}
                    autoHideDuration={2000}
                    onClose={this.handleMsgClose}
                    message={<span id="message-id">{this.state.msg}</span>}
                    action={[
                        <IconButton key="close" color="inherit" onClick={this.handleMsgClose}>
                            <CloseIcon/>
                        </IconButton>,
                    ]}
                />
            </Fragment>
        );
    }
}

export default ReactCountries;