import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router';

import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HeaderContainer from './header/header_container';
import FirstbodyContainer from './firstbody/firstbody_container';
import FirstBody from './firstbody/firstbody_container';
import { AuthRoute } from '../util/route_util';
import { logout } from '../util/session_api_util';

const App = () => (
    <div>
    <header className="header-links">
            <HeaderContainer />
        </header>
            {/* <Route exact path="/" component={FirstBody} /> */}
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </Switch>
    </div>
);

export default App;