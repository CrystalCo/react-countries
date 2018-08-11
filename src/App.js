import React from 'react';
import GitHubRibbon from './components/GitHubRibbon';
import ReactCountriesContainer from './containers/ReactCountriesContainer';
import CountryDetails from './components/CountryDetails';
import About from './components/About';
import {Route, Switch} from "react-router-dom";
import {withRouter} from 'react-router'
import logo from './img/logo.svg';

const Header = ({match, location, history}) => (
    <header className="RC-header">
        <img src={logo} className="RC-logo" alt="logo"/>
        <h1 className="RC-title">{`Welcome to React Countries (${location.pathname})`}</h1>
        <GitHubRibbon/>
    </header>
);

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ReactCountriesContainer}/>
            <Route path='/country/:countryCode' component={CountryDetails}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
);

export default function App() {
    const HeaderWithRouter = withRouter(Header);

    return (
        <div>
            {/*<Header/>*/}
            <HeaderWithRouter/>
            <Main/>
        </div>
    );
}