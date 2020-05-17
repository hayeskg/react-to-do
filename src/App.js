import React from 'react';
import './App.css';
import Header from './Header';
import TaskList from './TaskList';
import TaskAdder from './TaskAdder';

class App extends React.Component {
  state = {
    tasks: [
      {
        task: 'Buy milk',
        done: false,
      },
      {
        task: 'Go skate',
        done: true,
      },
      {
        task: 'Practice React',
        done: false,
      },
    ],
    user: 'Kristof'
  }

  render() {
    console.log('Rendering...');
    return (
      <div className="App">
        <Header user={this.state.user} />
        <TaskAdder addNewTask={this.addNewTask} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }

  addNewTask = (newTask) => {
    this.setState((currentState) => {
      // const newTaskPlusDone = { ...newTask };
      // newTaskPlusDone.done = false;
      // console.dir(newTaskPlusDone)
      return { tasks: [...currentState.tasks, newTask] };
    });
  };
}

export default App;


// npx create-react-app .