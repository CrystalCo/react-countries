import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import configureStore from './configureStore';
import {BrowserRouter, HashRouter} from 'react-router-dom'

ReactDOM.render(
    <HashRouter>
        <Provider store={configureStore()}>
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
                <App/>
            </MuiThemeProvider>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);