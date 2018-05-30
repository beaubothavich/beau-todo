import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const TodoListItem = ({ id, description, note }) => {
    return (
        <div className="container center">
        <Paper elevation={4}>
        <Typography variant="headline">
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
            </Link>
        </Typography>
        <Typography >
            <p>{note}</p>
        </Typography>
      </Paper>
        </div>
    );
}

export default TodoListItem;