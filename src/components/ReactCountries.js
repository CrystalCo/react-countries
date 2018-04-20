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

class RcRow extends React.Component {
    render() {
        const country = this.props.country;

        return (
            <Fragment>
                <ListItem>
                    <img src={`https://restcountries.eu/data/${country.code}.svg`} alt={country.code} className="RC-flag"/>
                    <ListItemText primary={country.name} secondary={country.capital}/>
                    <ListItemSecondaryAction>
                        <Tooltip title="Visited" placement="left">
                            <Checkbox checked={country.visited}/>
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
                    <RcRow country={country} key={country.code}/>
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
    render() {
        const onlyVisited = this.props.onlyVisited;

        return (
            <div className="RC-toolbar">
                <Tooltip title="Add Country" placement="bottom">
                    <Button mini="small" variant="fab" color="primary">
                        <Icon>add</Icon>
                    </Button>
                </Tooltip>
                <Tooltip title="Only Visited" placement="bottom">
                    <Switch
                        checked={onlyVisited}
                        /*onChange={this.handleChange('checkedB')}
                        value="checkedB"*/
                        color="secondary"
                    />
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

    render() {
        return (
            <Paper className="RC" elevation={4}>
                <RotatingEarth/>
                <RcToolbar onlyVisited={this.state.onlyVisited}/>
                <RcList countries={this.state.countries} onlyVisited={this.state.onlyVisited}/>
            </Paper>
        );
    }
}

export default ReactCountries;