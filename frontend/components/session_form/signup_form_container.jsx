import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, removeErrors } from '../../actions/session_actions';
import SignupSessionForm from './signup_session_form';

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'signup',
        prefix: 'Already have an account?',
        navLink: <Link to="/login">login instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
