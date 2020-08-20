/* eslint-disable react/prefer-stateless-function */
/* eslint-disable func-style */
import React from 'react';

function logProps(WrappedComponent) {
    class LogProps extends React.Component {
        componentDidUpdate(prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }
  
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
  
    return LogProps;
}

class FancyButton extends React.Component {
    focus() {
        // ...
    }
  
    // ...
}

export default logProps(FancyButton);
