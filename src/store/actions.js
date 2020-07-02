export const increment = () => {
  return {
    type: 'INCREMENT',
    num: 10,
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
    num: 20,
  }
}

export const addList = () => {
  return {
    type: 'ADDLIST',
    data: {
      list: [
          { name: 'wwj1' ,'age': 25 , job: 'coder1'},
           {name: 'wwj2' ,'age': 26 , job: 'coder2'}, 
           {name: 'wwj3' ,'age': 27 , job: 'coder3'}
        ],
    },
  }
}
