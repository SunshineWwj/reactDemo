/* eslint-disable no-alert */
/* eslint-disable func-style */
import React from 'react';
import InputComponent from './component/InputComponent';
import {Button} from 'antd';
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
const obj = {
    name: 'wwj',
    age: 24
};
class FancyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'coconut',
            a: 'aaaa',
            count: 0
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert(`你喜欢的风味是: ${this.state.value}`);
        event.preventDefault();
    }
  
  inputRef = React.createRef();

  
  incrementCount=() => {
      //   this.setState({count: this.state.count + 1});//输出1
      this.setState(state => ({count: state.count + 1})); //输出3
  }
  onChange = (value, name) => {
      console.log('ref:', this.inputRef);
      this.setState({a: value});
      console.log(value, name);


      obj[name] = 'wwj1';
      obj.age = '25';
      console.log(obj);
  };
onIncrement=() => {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
}
render() {
    return (
        <React.Fragment>
            <div>
                    请输入文字：
                <InputComponent
                    ref={ref => (this.inputRef = ref)}
                    name="name"
                    value={this.state.a}
                    onBlur={this.onChange}/>
                  
            </div>
            <Button onClick={this.onIncrement}>点击+1</Button>
            <h2>{this.state.count}</h2>

            <form onSubmit={this.handleSubmit}>
                <label>
          选择你喜欢的风味:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        </React.Fragment>
         
    );
}
}

export default FancyButton;
