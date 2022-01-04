import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, LOG_IN } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: LOG_IN,
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
