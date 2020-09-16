/* eslint-disable no-class-assign */
/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, {Component} from 'react';
import MiddleFunc from './MiddleFunc';
// export default class Goodbye extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: ''
//         };
//     }
//     // eslint-disable-next-line react/no-deprecated
//     componentWillMount() {
//         const username = localStorage.getItem('username');
//         this.setState({username});
//     }
//     render() {
//         return (
//             <div>
//                 Goodbye <MiddleFunc />
//             </div>
//         );
//     }
// }

class Goodbye extends Component {
    render() {
        return (<div>
            Welcome {this.props.username}
        </div>);
    }
}
Goodbye = MiddleFunc(Goodbye);
export default Goodbye;
