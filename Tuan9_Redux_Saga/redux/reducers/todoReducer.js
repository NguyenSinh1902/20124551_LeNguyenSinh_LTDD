const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TODOS_REQUEST':
    case 'ADD_TODO_REQUEST':
    case 'UPDATE_TODO_REQUEST':
    case 'DELETE_TODO_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: action.payload,
      };
    case 'ADD_TODO_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE_TODO_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
      };
    case 'DELETE_TODO_SUCCESS':
      return {
        ...state,
        loading: false,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case 'FETCH_TODOS_FAILURE':
    case 'ADD_TODO_FAILURE':
    case 'UPDATE_TODO_FAILURE':
    case 'DELETE_TODO_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default todoReducer;