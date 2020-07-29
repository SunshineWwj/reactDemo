import { uuid } from "../utils";
let count = 0;
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
  count++;
  return {
    type: "ADDLIST",
    data: {
      list: [
        { id: uuid(), name: `wwj${count}`, age: 25, job: "coder1" },
        { id: uuid(), name: `wwj${count}`, age: 26, job: "coder2" },
        { id: uuid(), name: `wwj${count}`, age: 27, job: "coder3" },
      ],
    },
  };
};
export const addTodo = () => {
  count++;
  return {
    type: "ADD_TODO",
    data: [{ id: uuid(), name: `wwj${count}`, age: 25, job: `coder${count}` }],
  };
};

export const deleteTodo = (index) => {
  return {
    type: "DELETE_TODO",
    data: index,
  };
};
