import React, {Fragment} from 'react';
import {Icon} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

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