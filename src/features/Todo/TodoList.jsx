import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './todoSelector';
import { RiCheckboxBlankLine, RiCheckboxFill } from 'react-icons/ri';

import Button from '../../components/Button';
import List from '../../components/List';

const TodoList = ({ todos, selectTodo, updateTodoStatus, deleteTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <List.Item key={index} status={todo.status}>
          <span>{todo.name}</span>
          <List.ItemButton>
            {todo.status === 'pending' && (
              <Button size="small" onClick={() => selectTodo(todo)}>
                Edit
              </Button>
            )}
            <Button
              size="small"
              onClick={() => {
                if (confirm('Are you sure?')) {
                  deleteTodo(todo.id);
                  selectTodo(null);
                }
              }}
            >
              Delete
            </Button>
            {todo.status === 'pending' ? (
              <RiCheckboxBlankLine
                size={31}
                onClick={() =>
                  updateTodoStatus({ id: todo.id, status: 'success' })
                }
                style={{ cursor: 'pointer' }}
              />
            ) : (
              <RiCheckboxFill
                size={31}
                onClick={() =>
                  updateTodoStatus({ id: todo.id, status: 'pending' })
                }
                style={{ cursor: 'pointer' }}
              />
            )}
          </List.ItemButton>
        </List.Item>
      ))}
    </List>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
