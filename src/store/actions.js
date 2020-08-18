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

export const addList = () => {
    count++;
    fetch('/api/data')
        .then(res => res.json())
        .then(data => {
            if(data)
                return {
                    type: 'ADDLIST',
                    data: {
                        list: data,
                    },
                };
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
