/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';

export default class extends React.Component {
    render() {
        console.log(this.props.data);
        return (
            <div>
                {this.props.data.map(value => (
                    <div comment={value} key={value} >{value}</div>
                ))}
            </div>
        );
    }
}
