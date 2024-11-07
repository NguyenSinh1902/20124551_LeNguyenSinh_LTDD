export const fetchTodos = () => ({
    type: 'FETCH_TODOS_REQUEST'
  });
  
  export const addTodo = (todo) => ({
    type: 'ADD_TODO_REQUEST',
    payload: todo
  });
  
  export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO_REQUEST',
    payload: todo
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO_REQUEST',
    payload: id
  });