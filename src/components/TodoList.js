import React from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    const { classes } = props;
    return (
    <div>
        <h1>Todo List</h1>
  
        {props.todo.map((todo) => {
            return <TodoListItem key={todo.id} {...todo}/>
        })}
    </div>
    );
}
const mapStateToProps = (state) => {
    return {
        todo: state.todo
    };
};

export default connect(mapStateToProps)(TodoList);

