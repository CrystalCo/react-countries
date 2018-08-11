import React from 'react';
import GitHubRibbon from './components/GitHubRibbon';
import ReactCountriesContainer from './containers/ReactCountriesContainer';
import {Route, Switch} from "react-router-dom";
import logo from './img/logo.svg';

const Header = () => (
    <header className="RC-header">
        <img src={logo} className="RC-logo" alt="logo"/>
        <h1 className="RC-title">Welcome to React Countries</h1>
        <GitHubRibbon/>
    </header>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ReactCountriesContainer}/>
            {/*<Route path='/roster' component={Roster}/>
            <Route path='/schedule' component={Schedule}/>*/}
        </Switch>
    </main>
);

export default function App() {
    return (
        <div>
            <Header/>
            <Main/>
        </div>
    );
}