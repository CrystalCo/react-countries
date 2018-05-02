import React from 'react';
import ReactDOM from 'react-dom';
import ReactCountriesApp from './containers/ReactCountriesApp';
import {Provider} from 'react-redux'
import {createStore} from 'redux';
import CssBaseline from 'material-ui/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';
import rootReducer from './reducers';
import logo from './logo.svg';
import './index.css';
import GitHubRibbon from './components/GitHubRibbon';

//const store = createStore(rootReducer);

// TODO - temp!
const initialState = {
    countries: [
        {code: 'col', name: 'Colombia', capital: 'Bogota', visited: true},
        {code: 'srb', name: 'Serbia', capital: 'Belgrade', visited: false}],
    allCountries: [
        {name: "Afghanistan", alpha3Code: "AFG", capital: "Kabul"},
        {name: "Åland Islands", alpha3Code: "ALA", capital: "Mariehamn"}
    ]
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={createMuiTheme({
            palette: {
                primary: {
                    main: '#66dbf9',
                    light: '#9effff',
                    dark: '#1fa9c6',
                    contrastText: '#000000',
                },
                secondary: {
                    main: '#fb6d6f',
                    light: '#ff9f9d',
                    dark: '#c33b44',
                    contrastText: '#000000',
                },
            },
        })}>
            <CssBaseline/>
            <div>
                <header className="RC-header">
                    <img src={logo} className="RC-logo" alt="logo"/>
                    <h1 className="RC-title">Welcome to React Countries</h1>
                    <GitHubRibbon/>
                </header>
                <ReactCountriesApp/>
            </div>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);