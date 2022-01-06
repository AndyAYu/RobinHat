import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <nav className="navHeader">
            <div>
            <Link className="robinHat"to="/">
                <h2>Robinhat
                <img className="robinHatLogo" src={window.logoURL}/>
                </h2>
            </Link>
            </div>
            <div className="login-signup">
                <Link className="login-header"to="/login">
                    <p>
                    Log In
                    </p>
                </Link>
                <Link className="signup-header"to="/signup">
                    <p>
                    Sign Up
                    </p>
                </Link>
            </div>
        </nav>
    );
    const loggedInHeader = () => (
        <hgroup className="logged-header">
            <h2>Welcome, {currentUser.email}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup> 

        
    );

    return currentUser ? loggedInHeader() : sessionLinks()
};

export default Header;

//import React from 'react'; 

// class ClickDropdown extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             show: false
//         }

//         this.whenFocusOrBlur = this.whenFocusOrBlur.bind(this);
//     }

//     whenFocusOrBlur(e) {
//         const newState = !this.state.show
//         this.setState({ show: newState })
//     }

//     render() {
//         return (
//             <div>
//                 <button onFocus={this.whenFocusOrBlur} onBlur={this.whenFocusOrBlur}>ICON THAT TRIGGERS DROPDOWN
//                     <ul onClick={e => e.stopPropagation()} classname={this.state.show ? "show-dropdown" : "clear"}>
//                         <li>Click this</li>
//                         <li>Click this too</li>
//                         <li>Or click this</li>
//                     </ul>
//                 </button>
//             </div>
//         )
//     }
// }