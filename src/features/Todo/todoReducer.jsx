import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  todos: [
    {
      id: 1,
      name: 'Todo 1',
      status: 'pending',
    },
  ],
  todoSelected: null,
};

const todoReducer = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodo: (state) => {
      state.status = 'loading';
    },
    setTodoSuccess: (state, action) => {
      state.status = 'idle';
      state.todos.push(action.payload);
    },
    selectTodo: (state) => {
      state.status = 'loading';
    },
    selectTodoSuccess: (state, action) => {
      state.status = 'idle';
      state.todoSelected = action.payload;
    },
    clearSelectTodo: (state) => {
      state.status = 'loading';
    },
    clearSelectTodoSuccess: (state) => {
      state.status = 'idle';
      state.todoSelected = null;
    },
    updateTodo: (state) => {
      state.status = 'loading';
    },
    updateTodoSuccess: (state, action) => {
      state.status = 'idle';
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo,
      );
    },
  },
});

export const todoSelector = (state) => state.todo;

export const {
  setTodo,
  setTodoSuccess,
  selectTodo,
  selectTodoSuccess,
  clearSelectTodo,
  clearSelectTodoSuccess,
  updateTodo,
  updateTodoSuccess,
} = todoReducer.actions;

export default todoReducer.reducer;
