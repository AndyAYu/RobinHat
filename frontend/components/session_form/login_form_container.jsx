import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, removeErrors } from '../../actions/session_actions';
import LoginSessionForm from './login_session_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'login',
        prefix: 'Not on Robinhat?',
        navLink: <Link className="create-an-account-link"to="/signup">Create an account</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginSessionForm);
