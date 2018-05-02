import React from 'react';
import './ReactCountries.css';
import RotatingEarth from './RotatingEarth';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../img/logo.svg';
import GitHubRibbon from '../components/GitHubRibbon';
import ToolbarContainer from "../containers/ToolbarContainer";
import UserCountriesContainer from "../containers/UserCountriesContainer";
import AddCountryContainer from "../containers/AddCountryContainer";

export default function ReactCountries({msg, msgOpen, handleMsgClose}) {
    return (
        <div>
            <header className="RC-header">
                <img src={logo} className="RC-logo" alt="logo"/>
                <h1 className="RC-title">Welcome to React Countries</h1>
                <GitHubRibbon/>
            </header>
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
        </div>
    );
}