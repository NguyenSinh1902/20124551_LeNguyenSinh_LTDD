// Định nghĩa một action type để thêm task
export const ADD_TASK = 'ADD_TASK';

// Action creator để thêm task
export const addTask = (title) => ({
  type: ADD_TASK,
  payload: { id: Date.now().toString(), title },
});
