
export const fetchTodos = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TODOS_REQUEST' });
  try {
    const response = await fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/pets');
    const data = await response.json();
    dispatch({ type: 'FETCH_TODOS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_TODOS_FAILURE', error });
  }
};

export const addTodo = (todo) => async (dispatch) => {
  dispatch({ type: 'ADD_TODO_REQUEST' });
  try {
    const response = await fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    dispatch({ type: 'ADD_TODO_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_TODO_FAILURE', error });
  }
};