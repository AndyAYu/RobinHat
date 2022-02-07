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
import FirstBodyContainer from './splashbody/firstbody/firstbody_container';
import StockShowContainer from './stock_show/stock_show_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { logout } from '../util/session_api_util';

const App = () => (
    <div>

        <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute path="/stock/:ticker" component={StockShowContainer}/>
        <Route path="/">
            <HeaderContainer/>
            <FirstBodyContainer/>
        </Route>
        </Switch>
    </div>
);

export default App;