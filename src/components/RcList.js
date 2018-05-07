import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import RcRow from "./RcRow";
import Loading from "./Loading";

export default function RcList({countries, onCountryVisitedChange, onCountryDeleted, isFetching}) {
    const content = isFetching ? (
        <Loading/>
    ) : (
        countries.map(country => <RcRow key={country.code} {...country} onCountryVisitedChange={onCountryVisitedChange} onCountryDeleted={onCountryDeleted}/>)
    );

    return (
        <Paper elevation={1}>
            <List className="RC-list">
                {content}
            </List>
        </Paper>
    );
}