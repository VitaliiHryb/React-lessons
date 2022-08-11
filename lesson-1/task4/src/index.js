import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root'));

// используем JSX
const element = (
  <div className="greeting">
    <div className="greeting__title">Hello, world!</div>
    <div className="greeting__text">I am learning React</div>
  </div>
);

console.log(element);

root.render(element);
