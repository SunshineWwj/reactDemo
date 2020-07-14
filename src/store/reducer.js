import { combineReducers } from "redux";
const counter = (state, action) => {
  console.log(state, action.data);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.num };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.num };
    case "ADDLIST":
      return {
        ...state,
        todoList: action.data.list,
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: state.todoList.concat(action.data),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((list) => list.id != action.data),
      };
    default:
      return state;
  }
};
const todos = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: state.todoList.concat({
          name: "wwj3",
          age: 27,
          job: "coder3",
        }),
      };
    default:
      return state;
  }
};

// export default combineReducers({
//   counter,
//   todos,
// });
export default counter;
