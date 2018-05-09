import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import RcRow from "./RcRow";
import Loading from "./Loading";
import FetchError from './FetchError';

export default function RcList({countries, onCountryVisitedChange, onCountryDeleted, isFetching, errorMessage, fetchUserCountries, onlyVisited}) {
    const content = errorMessage ?
        (<FetchError message={errorMessage} onRetry={() => fetchUserCountries(onlyVisited)}/>) :
        (isFetching ?
            (<Loading/>) :
            (countries.map(country => <RcRow key={country.code} {...country} onCountryVisitedChange={onCountryVisitedChange} onCountryDeleted={onCountryDeleted}/>))
        );

    return (
        <Paper elevation={1}>
            <List className="RC-list">
                {content}
            </List>
        </Paper>
    );
}