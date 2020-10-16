/* eslint-disable no-plusplus */
import {uuid} from '../utils';
let count = 0;
export const increment = () => ({
    type: 'INCREMENT',
    num: 10,
});

export const decrement = () => ({
    type: 'DECREMENT',
    num: 20,
});

const getListEnd = data => ({
    type: 'ADDLIST',
    list: data
});
export const addList = dispatch => {
    count++;
    fetch('/api/list')
        .then(res => res.json())
        .then(res => {
            if(res.data)
                dispatch(getListEnd(res.data));
            return res;
        });
};
export const addTodo = () => {
    count++;
    return {
        type: 'ADD_TODO',
        data: [{id: uuid(),
            name: `wwj${count}`,
            age: 25,
            job: `coder${count}`}],
    };
};

export const deleteTodo = index => ({
    type: 'DELETE_TODO',
    data: index,
});
