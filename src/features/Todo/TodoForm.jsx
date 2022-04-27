import React from 'react';
import { mapDispatchToProps, mapStateToProps } from './todoSelector';
import { connect } from 'react-redux';

import TextField from '../../components/TextField';
import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Space from '../../components/Space';

const TodoForm = ({
  todos,
  setTodo,
  todoSelected,
  clearSelectTodo,
  updateTodo,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  React.useEffect(() => {
    if (todoSelected) {
      setValue('name', todoSelected.name);
    } else {
      reset();
    }
  }, [todoSelected]);

  const onSubmit = (values) => {
    if (todoSelected) {
      values.id = todoSelected.id;
      values.status = todoSelected.status;
      updateTodo(values);
      clearSelectTodo();
    } else {
      values.id = todos.length + 1;
      values.status = 'pending';
      setTodo(values);
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Space>
        <TextField
          placeholder="Enter your task name..."
          {...register('name', {
            required: true,
          })}
          error={errors.name}
        />
        <Button type="submit" width={100} disabled={errors.name}>
          Save
        </Button>
        {todoSelected && (
          <Button
            width={100}
            onClick={() => {
              reset();
              clearSelectTodo();
            }}
          >
            Cancel
          </Button>
        )}
      </Space>
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
