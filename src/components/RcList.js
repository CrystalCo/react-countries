import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import RcRow from "./RcRow";
import Loading from "./Loading";

export default function RcList({countries, onCountryVisitedChange, onCountryDeleted}) {
    return (
        <Paper elevation={1}>
            <List className="RC-list">
                {/*<Loading />*/}
                {countries.map(country =>
                    <RcRow key={country.code} {...country} onCountryVisitedChange={onCountryVisitedChange} onCountryDeleted={onCountryDeleted}/>
                )}
            </List>
        </Paper>
    );
}