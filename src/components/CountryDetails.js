import React from 'react';
import './CountryDetails.css';

export default function About({match}) {
    return (
        <div className="RC-Details">
            <div>Country: {match.params.countryCode}</div>
            <img src={`https://restcountries.eu/data/${match.params.countryCode}.svg`} alt={match.params.countryCode} className="RC-flagX"/>
        </div>
    );
}