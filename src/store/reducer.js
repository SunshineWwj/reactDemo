import { combineReducers } from "redux";
import initState from "./state";
import { uuid } from "../utils";
const counter = (state = initState, action) => {
  //   console.log(initState, action.data);
  switch (action.type) {
    case "INCREMENT": {
      console.log(state);
      return state + action.num;
    }
    case "DECREMENT":
      return state - action.num;
    default:
      return state;
  }
};
const todoList = (state = initState, action) => {
  switch (action.type) {
    case "ADDLIST":
      return action.data.list;
    case "ADD_TODO":
      return state.concat(action.data);
    case "DELETE_TODO":
      return state.filter((list) => list.id != action.data);
    default:
      return state;
  }
};

const list = combineReducers({
  counter,
  todoList,
});
export default combineReducers({
  list,
});
// export default counter;
