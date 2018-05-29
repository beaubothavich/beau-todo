import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.todo ? props.todo.description : '',
            note: props.todo ? props.todo.note: '',
            error: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState (() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState (() => ({ note }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.note) {
            this.setState(() => ({error: 'Please provide description and note'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note
            });
        }
    }
    render() {
        return (
         
         <div class="container">
        <Paper>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
          <TextField
            label="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <TextField
             label="Notes"
             value={this.state.note}
             onChange={this.onNoteChange}
            />
            <Button type="submit" variant="raised" size="small">
            Save
            </Button>
           </form>
         </Paper>
         </div>
        )
    }
}