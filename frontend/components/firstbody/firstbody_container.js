import React from 'react';
import { connect } from 'react-redux'; 
import { signup } from '../../actions/session_actions';
import { Link } from 'react-router-dom'
import FirstBody from './firstbody';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'signup',
        prefix: 'Already have an account?',
        navLink: <Link to="/login">login instead</Link>
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstBody);