import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HeaderContainer from './header/header_container';
import { AuthRoute } from '../util/route_util';
import logo from '../../app/assets/images/hat-logo.png';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
            <h1>Robinhat</h1>
            <img src={logo} width="50" height="50" />
            </Link>
            <HeaderContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;