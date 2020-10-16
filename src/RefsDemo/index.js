/* eslint-disable react/sort-comp */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {Button} from 'antd';
import ChildComponent from './Child';

//方式一
export default class RefsDemo extends React.Component {
    refDemo=React.createRef();
    onClick=() => {
        console.log(this.refDemo);
        this.refDemo.printInfo();
    }

    render() {
        return (
            <div>
                <h2>学习ref</h2>
                <p>我是父组件</p>
                <ChildComponent ref={ref => this.refDemo = ref}/>
                <Button onClick={this.onClick}>点击调用子组件</Button>
            </div>
        );
    }
}

//方式二
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref去储存textInput DOM元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    
    focusTextInput() {
        // 很明显的，让text input获得焦点使用了原生的DOM API
        // 注意：我们通过current去获得DOM节点
        this.textInput.current.focus();
        console.log(this.textInput.current);
    }
    
    render() {
        // 告诉React我们想要将<input>的ref和构造器中创建的textInput联系起来
        return (
            <div>
                <input
                    placeholder="我是一个输入框"
                    type="text"
                    ref={this.textInput} />
    
                <Button onClick={this.focusTextInput}>Focus the text input</Button>
            </div>
        );
    }
}

//方式三
class Parent extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.click} >click触发子组件方法</button>
                <Child onRef={this.onRef} />
            </div>
        );
    }
 
    onRef = ref => {
        this.child = ref;
    }
 
    click = e => {
        this.child.myName();
    }
}
 
class Child extends React.Component {
    componentDidMount() {
        this.props.onRef(this); //这步必须3
    }
 
    myName = () => console.log('我是子组件输出的');
 
    render() {
        return ('子组件');
    }
}
 

