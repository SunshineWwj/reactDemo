import React from 'react';

const HighOrderComponent = Component => {
    class MiddleFunc extends React.Component {
        constructor() {
            super();
            this.state = {
                username: ''
            };
        }

        // eslint-disable-next-line react/no-deprecated
        componentWillMount() {
            const username = localStorage.getItem('username');
            this.setState({
                username
            });
        }

        render() {
            return (
                <div>
                    <Component username={this.state.username}/>
                </div>
            );
        }
    }
    return MiddleFunc;
};

export default HighOrderComponent;
