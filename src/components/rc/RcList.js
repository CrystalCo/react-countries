import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import RcRow from "./RcRow";

export default function RcList(props) {
    const rows = [];
    const onlyVisited = props.onlyVisited;

    props.countries.forEach((country) => {
        if (country.visited || !onlyVisited) {
            rows.push(
                <RcRow country={country} key={country.code} onCountryVisitedChange={props.onCountryVisitedChange} onCountryDeleted={props.onCountryDeleted}/>
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