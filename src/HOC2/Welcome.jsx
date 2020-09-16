import React, {Component} from 'react';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }
    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        const username = localStorage.getItem('username');
        this.setState({username});
    }
    render() {
        return (
            <div>
                Welcome {this.state.username}
            </div>
        );
    }
}
