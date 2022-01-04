import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, SIGN_UP } from '../../actions/session_actions';
import SignupSessionForm from './signup_session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: SIGN_UP,
        prefix: 'Already have an account?',
        navLink: <Link to="/login">login instead</Link>,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupSessionForm);
