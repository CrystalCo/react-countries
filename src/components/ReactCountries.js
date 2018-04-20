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
import List, {ListItem, ListItemText, ListItemSecondaryAction} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import findIndex from 'lodash/findIndex'

class RcRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleCountryVisitedChange = this.handleCountryVisitedChange.bind(this);
    }

    handleCountryVisitedChange(countryCode, e) {
        this.props.onCountryVisitedChange(countryCode, e.target.checked);
    }

    render() {
        const country = this.props.country;

        return (
            <Fragment>
                <ListItem>
                    <img src={`https://restcountries.eu/data/${country.code}.svg`} alt={country.code}
                         className="RC-flag"/>
                    <ListItemText primary={country.name} secondary={country.capital}/>
                    <ListItemSecondaryAction>
                        <Tooltip title="Visited" placement="left">
                            <Checkbox checked={country.visited} onChange={(e) => this.handleCountryVisitedChange(country.code, e)}/>
                        </Tooltip>
                        <IconButton color="secondary">
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
                    <RcRow country={country} key={country.code} onCountryVisitedChange={this.props.onCountryVisitedChange}/>
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
                <Tooltip title="Add Country" placement="bottom">
                    <Button mini={true} variant="fab" color="primary">
                        <Icon>add</Icon>
                    </Button>
                </Tooltip>
                <Tooltip title="Only Visited" placement="bottom">
                    <Switch checked={onlyVisited} onChange={this.handleOnlyVisitedChange} color="secondary"/>
                </Tooltip>
                <Tooltip title="Show Map" placement="bottom">
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
            onlyVisited: false
        };

        this.handleOnlyVisitedChange = this.handleOnlyVisitedChange.bind(this);
        this.handleCountryVisitedChange = this.handleCountryVisitedChange.bind(this);

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
    }

    handleOnlyVisitedChange(onlyVisited) {
        this.setState({
            onlyVisited: onlyVisited
        })
    }

    handleCountryVisitedChange(countryCode, visited) {
        this.setState((prevState, props) => {
            let newState = {countries: [...prevState.countries]};
            newState.countries[findIndex(newState.countries, {'code': countryCode})].visited = visited;
            return newState;
        });
    }

    render() {
        return (
            <Paper className="RC" elevation={4}>
                <RotatingEarth/>
                <RcToolbar onlyVisited={this.state.onlyVisited} onOnlyVisitedChange={this.handleOnlyVisitedChange}/>
                <RcList countries={this.state.countries} onlyVisited={this.state.onlyVisited} onCountryVisitedChange={this.handleCountryVisitedChange}/>
            </Paper>
        );
    }
}

export default ReactCountries;