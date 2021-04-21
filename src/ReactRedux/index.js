/* eslint-disable react/prop-types */
/* eslint-disable func-style */
/* eslint-disable react/sort-prop-types */
import React from 'react';
import {connect} from 'react-redux';
import {
    increment,
    decrement,
    addList,
    addTodo,
    deleteTodo,
} from '../store/actions';
import {Button} from 'antd';
import PropTypes from 'prop-types';

function ComponentInfo(props) {
    console.log('aaa');
    return <Button onClick={props.onClick}>{props.name},{props.job}</Button>;
}
class storeTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchData: [],
            number: 0
        };
    }
    componentDidMount() {
        fetch('/api/list')
            .then(res => res.json())
            .then(data => {
                console.log('data:', data);
                this.setState({fetchData: data.data});
            });
    }
    setStateFunc = () => {
        console.log('this:', this);
        // this.setState(state => ({number: state.number + 1}));
        
        // this.setState(state => ({number: state.number + 1}));
        this.setState(state => ({number: 1}));
        // this.setAgeFunc();
    }
    setAgeFunc=() => {
        console.log('this2:', this);
        this.setState({obj: {
            name: 'anna',
            age: 22
        }});
    }
    render() {
        console.log('ssss');
        return (
            <div>
                <h1>{this.state.number}</h1>
                <Button onClick={this.setStateFunc}>点击</Button>
                
                <h2>{this.props.counter}</h2>
                <Button onClick={this.props.increment}>加10</Button>
                <Button onClick={this.props.decrement}>减20</Button>
                <Button onClick={this.props.addTodo}>addTodo</Button>
                {/* <Button onClick={this.props.deleteTodo}>deleteTodo</Button> */}
                <Button type="primary" onClick={this.props.addList}>
          list
                </Button>
                {(this.props.list || []).map((m, index) => (
                    <div key={index}>
                        <ComponentInfo {...m} onClick={() => this.props.deleteTodo(m.id)}></ComponentInfo>
                        {/* <Button onClick={() => this.props.deleteTodo(m.id)}>
                            {m.name}{' '}
                        </Button>
                        <span>{m.job} </span> */}
                    </div>
                ))}
                <div>
                    {this.state.fetchData.map((item, index) => (
                        <ul key={index}>
                            <li >{item.title}</li>
                            <li>{item.author}</li>
                            <li>{item.date}</li>
                        </ul>
                    ))}
                </div>
            </div>
        );
    }
}
storeTest.propTypes = {
    counter: PropTypes.number,
    increment: PropTypes.func,
    decrement: PropTypes.func,
    addTodo: PropTypes.func,
    list: PropTypes.array,
    addList: PropTypes.func,
    deleteTodo: PropTypes.func
};


const mapStateToProps = state => ({
    counter: state.list.counter,
    list: state.list.todoList,
});
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addList: () => (addList()),
    addTodo: () => dispatch(addTodo()),
    deleteTodo: index => dispatch(deleteTodo(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(storeTest);
