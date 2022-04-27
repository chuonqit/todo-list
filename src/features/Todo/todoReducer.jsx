import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  todos: [],
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
    updateTodoStatus: (state) => {
      state.status = 'loading';
    },
    updateTodoStatusSuccess: (state, action) => {
      state.status = 'idle';
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo,
      );
    },
    deleteTodo: (state) => {
      state.status = 'loading';
    },
    deleteTodoSuccess: (state, action) => {
      state.status = 'idle';
      const filtered = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = filtered;
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
  updateTodoStatus,
  updateTodoStatusSuccess,
  deleteTodo,
  deleteTodoSuccess,
} = todoReducer.actions;

export default todoReducer.reducer;
