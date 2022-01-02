import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = state => {
    // debugger
    return {
        errors: state.errors.session,
        formType: 'login',
        prefix: 'Not on Robinhat?',
        navLink: <Link to="/signup">Sign up!</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
