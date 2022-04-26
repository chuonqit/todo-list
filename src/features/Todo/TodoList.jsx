import React from 'react';
import { mapStateToProps, mapDispatchToProps } from './todoSelector';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import List from '../../components/List';

const TodoList = ({ todos, selectTodo }) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <List.Item key={index} status={todo.status}>
          <span>{todo.name}</span>
          {todo.status !== 'pending' && (
            <Button size="small" onClick={() => selectTodo(todo)}>
              Edit
            </Button>
          )}
        </List.Item>
      ))}
    </List>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
