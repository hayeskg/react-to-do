import React, { Component } from 'react';

class TaskAdder extends Component {
  state = {
    taskInput: '',
  };

  render() {
    const { taskInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a new task: <br />
          <input
            onChange={this.handleChange}
            name="taskInput"
            value={taskInput}
          />
        </label>
        <button type="submit">Add</button>
      </form >
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ taskInput: value })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { taskInput } = this.state;
    const newTask = {
      task: taskInput,
      done: false,
    };
    this.props.addNewTask(newTask);
    this.setState({ taskInput: '' });
  };


}

export default TaskAdder;