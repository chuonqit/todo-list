import { createSelector } from '@reduxjs/toolkit';
import {
  todoSelector,
  setTodo,
  selectTodo,
  clearSelectTodo,
  updateTodo,
} from './todoReducer';

export const getTodo = createSelector(todoSelector, (state) => state.todos);
export const getTodoSelected = createSelector(
  todoSelector,
  (state) => state.todoSelected,
);

export const mapStateToProps = (state) => {
  return {
    todos: getTodo(state),
    todoSelected: getTodoSelected(state),
  };
};

export const mapDispatchToProps = {
  setTodo,
  selectTodo,
  updateTodo,
  clearSelectTodo,
};
