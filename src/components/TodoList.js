import React from 'react';

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span
        className="icons"
        onClick={() => props.deleteItem(props.index)}
        style={{ marginLeft: '10px', cursor: 'pointer' }}
      >
        🗑️
      </span>
    </li>
  );
}

export default TodoList;
