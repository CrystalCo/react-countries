import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubRibbon from './components/GitHubRibbon';
import Button from 'material-ui/Button';

// For blah()
import camelCase from 'lodash/camelCase';
import math from 'lodash/math';

class App extends Component {
    render() {
        blah();

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React Countries</h1>
                    <GitHubRibbon/>
                </header>
                <p className="App-intro">
                    Coming soon..
                </p>
                <Button variant="raised" color="primary">
                    Material UI
                </Button>
            </div>
        );
    }
}

// Just for learning/playing
function blah() {
    console.log("Blah Invoked");

    // Lodash
    console.log(`CamelCase: ${camelCase("foo bar")}`);
    console.log(`Sum: ${math.sum([4, 2, 10])}`);
}

export default App;