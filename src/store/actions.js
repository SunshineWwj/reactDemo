import { uuid } from "../utils";
export const increment = () => {
  return {
    type: "INCREMENT",
    num: 10,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
    num: 20,
  };
};

export const addList = () => {
  return {
    type: "ADDLIST",
    data: {
      list: [
        { id: uuid(), name: "wwj1", age: 25, job: "coder1" },
        { id: uuid(), name: "wwj2", age: 26, job: "coder2" },
        { id: uuid(), name: "wwj3", age: 27, job: "coder3" },
      ],
    },
  };
};
export const addTodo = () => {
  return {
    type: "ADD_TODO",
    data: [
      { id: uuid(), name: "wwj6", age: 25, job: "coder1" },
      { id: uuid(), name: "wwj6", age: 26, job: "coder2" },
      { id: uuid(), name: "wwj6", age: 27, job: "coder3" },
    ],
  };
};

export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    data: index,
  };
};
