/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-plusplus */
import React, {Component} from 'react';
import {Button} from 'antd';

/**
 * 继承自 PureComponent
 */
class PureComponents extends React.PureComponent {
    state={
        count: 0,
        obj: {
            name: 'wwj',
            age: 25
        },
        array: [1, 2, 3, 4, 5]
    }
    componentDidMount() {
        console.log('PureComponent--componentDidMount');
    }
    componentDidUpdate() {
        console.log('PureComponent--componentDidUpdate');
    }
    InCount = () => {
        const a = this.state.array;
        a.push(...[6, 7, 8, 9]);
        this.setState({
            array: a
        });
    }
    render() {
        console.log('cc');
        return (
            <div>
                <h1 style={{fontWeight: 'bolder'}}>继承自React.PureComponent时，进行的是浅比较，也就是说，如果是引用类型的数据，只会比较是不是同一个地址，而不会比较具体这个地址存的数据是否完全一致</h1>
                <Button onClick={this.InCount}>{this.state.obj.name} {this.state.array}</Button>
                <h4 style={{color: 'red'}}>
                    <p>浅比较会忽略属性或状态突变的情况，其实也就是，'数据引用指针没变而数据被改变的时候'，
                也不新渲染组件。但其实很大程度上，我们是希望重新渲染的。</p>
                    <p>  所以，这就需要开发者自己保证避免数据突变。</p>
                    <p>如果想使  按钮  被点击后可以正确渲染*数组*，
                也很简单，在InCount方法内部，将 `const a = this.state.array;` 改为`const a = this.state.array.slice(0);`
                就行啦~（这时的array是在原来state的基础上复制出来一个新数组，所以引用地址当然变啦）</p>
                </h4>

            </div>);
    }
}


class Components extends React.Component {
    state={
        count: 0,
        obj: {
            name: 'wwj',
            age: 25
        },
        array: [1, 2, 3, 4, 5]
    }
    componentDidMount() {
        console.log('Component--componentDidMount');
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return true;
    }
    componentDidUpdate() {
        console.log('Component--componentDidUpdate');
    }
    InCount=() => {
        const a = this.state.array;
        a.push(...[6, 7, 8, 9]);
        this.setState({
            array: a
        });
    }
    render() {
        console.log('cc');
        return (<Button onClick={this.InCount}>{this.state.obj.name} {this.state.array}</Button>);
    }
}

export default PureComponents;
