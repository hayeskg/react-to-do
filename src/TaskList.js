import React from 'react';

function TaskList(props) {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li key={task.task}>
            <p>{task.task}
              {task.done && <span role="img" aria-label="list">
                ☑️
            </span>}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList; 