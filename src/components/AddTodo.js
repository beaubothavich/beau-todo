import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { addTodo } from '../actions/todo';

const AddTodo = (props) => (
    <div>
        <h1 className="center"> Add Todo </h1>
        <TodoForm 
         onSubmit={(todo) => {
             props.dispatch(addTodo(todo));
             props.history.push('/');
         }}
        />
    </div>
);

export default connect()(AddTodo);