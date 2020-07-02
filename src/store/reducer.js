const counter = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, counter: state.counter + action.num }
    case 'DECREMENT':
      return { ...state, counter: state.counter - action.num }
    case 'ADDLIST':
      return {
        ...state,
        todoList: action.data.list,
      }
    default:
      return state
  }
}
export default counter
