import React from 'react';
import Paper from 'material-ui/Paper';
import List from 'material-ui/List';
import RcRow from "./RcRow";

class RcList extends React.Component {
    render() {
        const rows = [];
        const onlyVisited = this.props.onlyVisited;

        this.props.countries.forEach((country) => {
            if (country.visited || !onlyVisited) {
                rows.push(
                    <RcRow country={country} key={country.code} onCountryVisitedChange={this.props.onCountryVisitedChange} onCountryDeleted={this.props.onCountryDeleted}/>
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

export default RcList;