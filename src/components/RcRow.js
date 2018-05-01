import React, {Fragment} from 'react';
import {Icon} from "material-ui";
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

export default function RcRow(props) {
    const country = props.country;

    return (
        <Fragment>
            <ListItem>
                <img src={`https://restcountries.eu/data/${country.code}.svg`} alt={country.code} className="RC-flag"/>
                <ListItemText primary={country.name} secondary={country.capital}/>
                <ListItemSecondaryAction>
                    <Tooltip title="Visited" placement="left">
                        <Checkbox checked={country.visited} onChange={(e) => props.onCountryVisitedChange(country.code, e.target.checked)}/>
                    </Tooltip>
                    <IconButton color="secondary" onClick={(e) => props.onCountryDeleted(country.code)}>
                        <Icon>delete</Icon>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </Fragment>
    );
}