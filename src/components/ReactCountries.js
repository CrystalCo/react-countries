import React, {Component, Fragment} from 'react';
import './ReactCountries.css';
import Button from 'material-ui/Button';
import './RotatingEarth';
import RotatingEarth from "./RotatingEarth";
import {Icon} from "material-ui";
import Paper from 'material-ui/Paper';
import Switch from 'material-ui/Switch';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import List, {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import findIndex from 'lodash/findIndex'
import sortedIndexBy from 'lodash/sortedIndexBy'
import remove from 'lodash/remove'
//import math from 'lodash/math';
import Dialog, {DialogActions, DialogContent, DialogTitle} from 'material-ui/Dialog';
import ReactSelect from './ReactSelect'
import CountryUtil from '../utils/CountryUtil'
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from '@material-ui/icons/Close';

class RcAddCountryDialog extends React.Component {
    render() {
        return (
            <div>
                <Dialog open={this.props.open} onClose={this.props.onDialogClose} fullWidth={true}>
                    <DialogTitle id="form-dialog-title">Add Country</DialogTitle>
                    <DialogContent>
                        <ReactSelect suggestions={this.props.suggestions} placeholder="Search a country" autofocus={true} value={this.props.countryToAdd} onChange={this.props.onCountryToAddChanged}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onDialogClose} color="primary">Cancel</Button>
                        <Button onClick={this.props.onCountryAdd} color="primary">Add</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

class RcRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountryVisitedChange = this.handleCountryVisitedChange.bind(this);
        this.handleCountryDeleted = this.handleCountryDeleted.bind(this);
    }

    handleCountryVisitedChange(countryCode, e) {
        this.props.onCountryVisitedChange(countryCode, e.target.checked);
    }

    handleCountryDeleted(countryCode) {
        this.props.onCountryDeleted(countryCode);
    }

    render() {
        const country = this.props.country;

        return (
            <Fragment>
                <ListItem>
                    <img src={`https://restcountries.eu/data/${country.code}.svg`} alt={country.code} className="RC-flag"/>
                    <ListItemText primary={country.name} secondary={country.capital}/>
                    <ListItemSecondaryAction>
                        <Tooltip title="Visited" placement="left">
                            <Checkbox checked={country.visited} onChange={(e) => this.handleCountryVisitedChange(country.code, e)}/>
                        </Tooltip>
                        <IconButton color="secondary" onClick={(e) => this.handleCountryDeleted(country.code)}>
                            <Icon>delete</Icon>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider/>
            </Fragment>
        );
    }
}

class RcList extends React.Component {
    render() {
        const rows = [];
        const onlyVisited = this.props.onlyVisited;

        this.props.countries.forEach((country) => {
            if (country.visited || !onlyVisited) {
                rows.push(
                    <RcRow country={country} key={country.code} onCountryVisitedChange={this.props.onCountryVisitedChange} onCountryDeleted={this.props.onCountryDeleted}/>
                );
            }
        });

        return (
            <Paper elevation={1}>
                <List className="RC-list">
                    {rows}
                </List>
            </Paper>
        );
    }
}

class RcToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnlyVisitedChange = this.handleOnlyVisitedChange.bind(this);
    }

    handleOnlyVisitedChange(e) {
        //this.props.onlyVisited(e.target.value);
        this.props.onOnlyVisitedChange(e.target.checked);
    }

    render() {
        const onlyVisited = this.props.onlyVisited;

        return (
            <div className="RC-toolbar">
                {/*<Tooltip title="Add Country" placement="bottom">*/}
                    <Button mini={true} variant="fab" color="primary" onClick={this.props.onDialogOpen}>
                        <Icon>add</Icon>
                    </Button>
                {/*</Tooltip>*/}
                <Tooltip title="Only Visited" placement="bottom">
                    <Switch checked={onlyVisited} onChange={this.handleOnlyVisitedChange} color="secondary"/>
                </Tooltip>
                <Tooltip title="Show Map (WIP)" placement="bottom">
                    <IconButton color="secondary">
                        <Icon>map</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}

class ReactCountries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            allCountries: [],
            countrySuggestions: [],
            onlyVisited: false,
            addCountryDialogOpened: false,
            countryToAdd: '',
            msgOpen: false,
            msg: ''
        };

        this.handleOnlyVisitedChange = this.handleOnlyVisitedChange.bind(this);
        this.handleCountryVisitedChange = this.handleCountryVisitedChange.bind(this);
        this.handleCountryDeleted = this.handleCountryDeleted.bind(this);
        this.handleOpenAddCountryDialog = this.handleOpenAddCountryDialog.bind(this);
        this.handleCloseAddCountryDialog = this.handleCloseAddCountryDialog.bind(this);
        this.handleCountryToAddChanged = this.handleCountryToAddChanged.bind(this);
        this.handleAddCountry = this.handleAddCountry.bind(this);
        this.handleMsgClose = this.handleMsgClose.bind(this);
    }

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

    handleOnlyVisitedChange(onlyVisited) {
        this.setState({
            onlyVisited: onlyVisited
        });
    }

    handleCountryVisitedChange(countryCode, visited) {
        this.setState((prevState, props) => {
            let newState = {countries: [...prevState.countries]};
            newState.countries[findIndex(newState.countries, {'code': countryCode})].visited = visited;
            return newState;
        });
    }

    handleCountryDeleted(countryCode) {
        this.setState((prevState, props) => {
            let newState = {countries: [...prevState.countries], msgOpen: true, msg: "Country has been deleted"};
            remove(newState.countries, (country) => country.code === countryCode);
            return newState;
        });
    }

    handleOpenAddCountryDialog() {
        this.setState({
            addCountryDialogOpened: true
        })
    }

    handleCloseAddCountryDialog() {
        this.setState({
            addCountryDialogOpened: false,
            countryToAdd: ''
        })
    }

    handleCountryToAddChanged(country) {
        if (country) {
            this.setState({
                countryToAdd: country.toLowerCase()
            })
        }
    }

    handleAddCountry() {
        if (this.state.countryToAdd) {
            if (findIndex(this.state.countries, {'code': this.state.countryToAdd}) === -1) {
                this.setState((prevState, props) => {
                    let c = this.state.allCountries[findIndex(this.state.allCountries, {'alpha3Code': this.state.countryToAdd.toUpperCase()})];
                    let newCountry = {
                        code: c.alpha3Code.toLowerCase(),
                        name: c.name,
                        capital: c.capital,
                        visited: false
                    };
                    let newCountries = [...prevState.countries];
                    newCountries.splice(sortedIndexBy(newCountries, newCountry, 'name'), 0, newCountry);
                    return {countries: newCountries, msgOpen: true, msg: "Country has been added"};
                });
            }

            this.handleCloseAddCountryDialog();
        }
    }

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