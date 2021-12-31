import React from 'react';
import { Provider } from 'react-redux';


import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
            <h1>Robinhat</h1>
            </Link>
        </header>
        <Routes>
            <AuthRoute />
        </Routes>
    </div>
);

export default App;