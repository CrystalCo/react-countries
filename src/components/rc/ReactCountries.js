import React, {Fragment} from 'react';
import './ReactCountries.css';
import RotatingEarth from '../RotatingEarth';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import RcAddCountryDialog from "./RcAddCountryDialog";
import RcList from "./RcList";
import RcToolbar from "./RcToolbar";

export default function ReactCountries(props) {
    return (
        <Fragment>
            <Paper className="RC" elevation={4}>
                <RotatingEarth/>
                <RcToolbar onlyVisited={props.onlyVisited} onOnlyVisitedChange={props.handleOnlyVisitedChange}
                           onDialogOpen={props.handleOpenAddCountryDialog}/>
                <RcList countries={props.countries} onlyVisited={props.onlyVisited}
                        onCountryVisitedChange={props.handleCountryVisitedChange}
                        onCountryDeleted={props.handleCountryDeleted}/>
                <RcAddCountryDialog open={props.addCountryDialogOpened}
                                    suggestions={props.allCountriesSuggestion}
                                    onDialogClose={props.handleCloseAddCountryDialog}
                                    countryToAdd={props.countryToAdd}
                                    onCountryToAddChanged={props.handleCountryToAddChanged}
                                    onCountryAdd={props.handleAddCountry}/>
            </Paper>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                open={props.msgOpen}
                autoHideDuration={2000}
                onClose={props.handleMsgClose}
                message={<span id="message-id">{props.msg}</span>}
                action={[
                    <IconButton key="close" color="inherit" onClick={props.handleMsgClose}>
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        </Fragment>
    );
}