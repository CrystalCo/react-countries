import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubRibbon from './components/GitHubRibbon';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React Countries</h1>
                </header>
                <GitHubRibbon/>
                <p className="App-intro">
                    Coming soon..
                </p>
            </div>
        );
    }
}

export default App;