import React, {Fragment} from 'react';
import './ReactCountries.css';
import RotatingEarth from './RotatingEarth';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import ToolbarContainer from "../containers/ToolbarContainer";
import UserCountriesContainer from "../containers/UserCountriesContainer";
import AddCountryContainer from "../containers/AddCountryContainer";

export default function ReactCountries({msg, msgOpen, handleMsgClose}) {
    return (
        <Fragment>
            <Paper className="RC" elevation={4}>
                <RotatingEarth/>
                <ToolbarContainer/>
                <UserCountriesContainer/>
                <AddCountryContainer/>
            </Paper>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'left',}}
                open={msgOpen}
                autoHideDuration={2000}
                onClose={handleMsgClose}
                message={<span id="message-id">{msg}</span>}
                action={[
                    <IconButton key="close" color="inherit" onClick={handleMsgClose}>
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        </Fragment>
    );
}