import React, {Fragment} from 'react';
import './ReactCountries.css';
import './RotatingEarth';
import {Icon} from "material-ui";
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

class RcRow extends React.Component {
    handleCountryVisitedChange = (countryCode, e) => {
        this.props.onCountryVisitedChange(countryCode, e.target.checked);
    };

    handleCountryDeleted = (countryCode) => {
        this.props.onCountryDeleted(countryCode);
    };

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

export default RcRow;