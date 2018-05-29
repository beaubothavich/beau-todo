import React from 'react';
import { connect } from 'react-redux';
import TodoForm from './TodoForm';
import { editTodo, removeTodo } from '../actions/todo';

const EditTodo = (props) => {
    return (
        <div>
            <TodoForm
             todo={props.todo}
             onSubmit={(todo) => {
                props.dispatch(editTodo(props.todo.id, todo));
                props.history.push('/');    
                console.log('updated',todo);
             }}
            />
            <button onClick={() => {
            props.dispatch(removeTodo({ id: props.todo.id }));
            props.history.push('/');   
        }}>Remove</button>
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