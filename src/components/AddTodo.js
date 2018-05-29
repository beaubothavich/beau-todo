import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { addTodo } from '../actions/todo';

const AddTodo = (props) => (
    <div>
        <h1> Add Todo </h1>
        <TodoForm 
         onSubmit={(todo) => {
             props.dispatch(addTodo(todo));
             props.history.push('/');
         }}
        />
    </div>
);

export default connect()(AddTodo);