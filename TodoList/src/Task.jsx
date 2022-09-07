import React from 'react';
import classNames from 'classnames';

function Task({ done, text }) {
  const listItemClasses = classNames('list-item', { 'list-item_done': done });
  return (
    <li className={listItemClasses}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
}

export default Task;

// const listItemClasses = `list-item ${done ? 'list-item_done' : ''}`;
// ==> after className babel ==>
// const listItemClasses = classNames('list-item', {'list-item_done' : done});
