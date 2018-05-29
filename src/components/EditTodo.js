import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { editTodo, removeTodo } from '../actions/todo';
import Button from '@material-ui/core/Button';


const EditTodo = (props) => {
    return (
        <div>
            <h1> Edit Todo </h1>
            <TodoForm
             todo={props.todo}
             onSubmit={(todo) => {
                props.dispatch(editTodo(props.todo.id, todo));
                props.history.push('/');    
                console.log('updated',todo);
             }}
            />
            <Button variant="raised" color="secondary" onClick={() => {
            props.dispatch(removeTodo({ id: props.todo.id }));
            props.history.push('/');   
        }}>Remove</Button>
        </div>
    );
};

const mapStatetoProps = (state, props) => {
    return {
        todo: state.todo.find((todo) => {
            return todo.id === props.match.params.id;
        })      
    };
};

export default connect(mapStatetoProps)(EditTodo);