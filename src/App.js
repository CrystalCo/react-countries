import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubRibbon from './components/GitHubRibbon';
import ReactCountries from './components/ReactCountries';
import CssBaseline from 'material-ui/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

// For blah()
//import camelCase from 'lodash/camelCase';
//import math from 'lodash/math';

class App extends Component {
    render() {
        //blah();

        const theme = createMuiTheme({
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
        });

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React Countries</h1>
                        <GitHubRibbon/>
                    </header>
                    <ReactCountries/>
                </div>
            </MuiThemeProvider>
        );
    }
}

// Just for learning/playing
/*function blah() {
    console.log("Blah Invoked");

    // Lodash
    console.log(`CamelCase: ${camelCase("foo bar")}`);
    console.log(`Sum: ${math.sum([4, 2, 10])}`);
}*/

export default App;