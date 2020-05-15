import React from 'react';
import './App.css';
import Header from './Header';
import TaskList from './TaskList'

class App extends React.Component {
  state = {
    tasks: [
      {
        task: 'Buy milk',
        done: false,
      },
      {
        task: 'Go skate',
        done: false,
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
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;


// npx create-react-app .