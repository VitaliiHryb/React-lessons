// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles.css';

// const rootElement = document.querySelector('#root');

// // используем JSX
// const element = (
//   <div className="greeting">
//     <div className="greeting__title">Hello, world!</div>
//     <div className="greeting__text">I am learning React</div>
//   </div>
// );

// ReactDOM.render(element, rootElement);

// ================================================== //
// хотелось бы в таком, понятном виде описовать html
// <div className="greeting">
//  <div className="greeting__title">Hello, world!></div>
//  <div className="greeting__text">I am learning React></div>
// </div>
// ================================================== //

// In React 18
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

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
