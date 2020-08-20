/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/display-name */
import React from 'react';
import {Input, Button} from 'antd';

const {TextArea} = Input;
export default class extends React.Component {
    render() {
        return (
            <div>
                <TextArea value={this.props.data} />
            </div>
        );
    }
}
