import React from 'react';

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
         <div>
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
           <input
            type="text"
            placeholder="description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <textarea
             placeholder="note for stuff"
             value={this.state.note}
             onChange={this.onNoteChange}
            >
            </textarea>
            <button>Save</button>
           </form>
         </div>
        )
    }
}