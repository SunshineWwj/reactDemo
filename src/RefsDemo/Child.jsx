/* eslint-disable react/prefer-stateless-function */
import React from 'react';

export default class Child extends React.Component {
    printInfo=() => {
        console.log('我是子组件的打印方法');
    }
    render() {
        return (
            <div>
                <p>我是子组件</p>
            </div>
        );
    }
}
