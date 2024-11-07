import { call, put, takeEvery } from 'redux-saga/effects';

const fetchTodosApi = () => fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/User').then(response => response.json());

const addTodoApi = (todo) => fetch('https://6703835abd7c8c1ccd41b867.mockapi.io/User', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(todo),
}).then(response => response.json());

const updateTodoApi = (todo) => fetch(`https://6703835abd7c8c1ccd41b867.mockapi.io/User/${todo.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(todo),
}).then(response => response.json());

const deleteTodoApi = (id) => fetch(`https://6703835abd7c8c1ccd41b867.mockapi.io/User/${id}`, {
  method: 'DELETE',
}).then(response => response.json());

function* fetchTodos() {
  try {
    const data = yield call(fetchTodosApi);
    yield put({ type: 'FETCH_TODOS_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'FETCH_TODOS_FAILURE', error });
  }
}

function* addTodo(action) {
  try {
    const data = yield call(addTodoApi, action.payload);
    yield put({ type: 'ADD_TODO_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'ADD_TODO_FAILURE', error });
  }
}

function* updateTodo(action) {
  try {
    const data = yield call(updateTodoApi, action.payload);
    yield put({ type: 'UPDATE_TODO_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'UPDATE_TODO_FAILURE', error });
  }
}

function* deleteTodo(action) {
  try {
    yield call(deleteTodoApi, action.payload);
    yield put({ type: 'DELETE_TODO_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'DELETE_TODO_FAILURE', error });
  }
}

function* todoSaga() {
  yield takeEvery('FETCH_TODOS_REQUEST', fetchTodos);
  yield takeEvery('ADD_TODO_REQUEST', addTodo);
  yield takeEvery('UPDATE_TODO_REQUEST', updateTodo);
  yield takeEvery('DELETE_TODO_REQUEST', deleteTodo);
}

export default todoSaga;