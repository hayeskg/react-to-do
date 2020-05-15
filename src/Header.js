import React from 'react';

function Header(props) {
  return (
    < header >
      <h1>
        <span role="img" aria-label="list">
          📋
      </span>
        {' '}{props.user}'s To Do List!{' '}
        <span role="img" aria-label="list">
          📋
      </span>
      </h1>
    </header >
  );
}

export default Header;