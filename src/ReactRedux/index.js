import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, addList } from '../store/actions';
import { Button } from 'antd';
class storeTest extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>{this.props.counter}</h2>
        <Button onClick={this.props.increment}>加10</Button>
        <Button onClick={this.props.decrement}>减20</Button>
        <Button type="primary" onClick={this.props.addList}>
          list
        </Button>
        {this.props.list.map(m => 
         (
            <div key={m.name}>
                <span>{m.name}    </span>
                <span>{m.age}    </span>
            </div>
         ) 
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    list: state.todoList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    addList: () => dispatch(addList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(storeTest);
