import React from 'react';

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li key={task.task}>
            <p>{task.task}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList; 