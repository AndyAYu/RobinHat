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