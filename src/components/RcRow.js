import React, {Fragment} from 'react';
import {Icon} from "material-ui";
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import {ListItem, ListItemSecondaryAction, ListItemText} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';

export default function RcRow({code, name, capital, visited, onCountryVisitedChange, onCountryDeleted}) {
    return (
        <Fragment>
            <ListItem>
                <img src={`https://restcountries.eu/data/${code}.svg`} alt={code} className="RC-flag"/>
                <ListItemText primary={name} secondary={capital}/>
                <ListItemSecondaryAction>
                    <Tooltip title="Visited" placement="left">
                        <Checkbox checked={visited} onChange={(e) => onCountryVisitedChange(code, e.target.checked)}/>
                    </Tooltip>
                    <IconButton color="secondary" onClick={(e) => onCountryDeleted(code)}>
                        <Icon>delete</Icon>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Divider/>
        </Fragment>
    );
}