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
import Firstbody_container from './firstbody/firstbody_container';
import { AuthRoute } from '../util/route_util';
import { logout } from '../util/session_api_util';

const App = () => (
    <div>
    <header className="header-links">
            <Link to="/">
            <h2>Robinhat</h2>
            </Link>
            <HeaderContainer />
        </header>
            <div className="firstBody">
                <Firstbody_container />
            </div>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;