import React from "react";
import { connect } from "react-redux";
import {
  increment,
  decrement,
  addList,
  addTodo,
  deleteTodo,
} from "../store/actions";
import { Button } from "antd";
class storeTest extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.list);
  }
  render() {
    return (
      <div>
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
            <Button onClick={() => this.props.deleteTodo(m.id)}>
              {m.name}{" "}
            </Button>
            <span>{m.job} </span>
          </div>
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.list.counter,
    list: state.list.todoList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addList: () => dispatch(addList()),
    addTodo: () => dispatch(addTodo()),
    deleteTodo: (index) => dispatch(deleteTodo(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(storeTest);
