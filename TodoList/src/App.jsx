import React from 'react';
import TodoList from './TodoList';

function App() {
  return <TodoList />;
}

export default App;

/*
TodoList Component

<main className="todo-list">
        <div className="create-task">
          <input className="create-task__input" type="text" value="" />
          <button className="btn create-task__btn">Create</button>
        </div>
        <ul className="list">
          <li className="list-item">
            <input type="checkbox" className="list-item__checkbox" />
            Learn React
            <button className="list-item__delete-btn"></button>
          </li>
          <li className="list-item list-item_done">
            <input type="checkbox" className="list-item__checkbox" />
            Lear HTML / CSS
            <button className="list-item__delete-btn"></button>
          </li>
          <li className="list-item list-item_done">
            <input type="checkbox" className="list-item__checkbox" />
            Learn JavaScript
            <button className="list-item__delete-btn"></button>
          </li>
          <li className="list-item list-item_done">
            <input type="checkbox" className="list-item__checkbox" />
            Learn Dev Tools
            <button className="list-item__delete-btn"></button>
          </li>
        </ul>
      </main>
*/
