// tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Buy groceries' },
  { id: '2', title: 'Walk the dog' },
  { id: '3', title: 'Do laundry' },
  { id: '4', title: 'Read a book' },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now().toString(), title: action.payload });
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.title = title;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;