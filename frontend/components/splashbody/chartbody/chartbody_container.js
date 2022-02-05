import React from 'react';
import { connect } from 'react-redux'; 

const mapStateToProps = state => {
    const currentUser = state.entities.users[state.session.id]
    return {
        portfolioValue: currentUser.portfolioValue
    }
}