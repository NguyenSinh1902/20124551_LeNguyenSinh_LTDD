import { ADD_TASK } from './actions';

// State ban đầu chứa danh sách các nhiệm vụ mặc định
const initialState = [
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Walk the dog' },
  { id: '3', title: 'Do laundry' },
  { id: '4', title: 'Read a book' },
];

// Reducer để quản lý các actions liên quan đến tasks
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default taskReducer;
