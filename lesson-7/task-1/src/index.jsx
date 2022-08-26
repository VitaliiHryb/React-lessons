import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import NumbersList from './NumbersList';

const root = ReactDOM.createRoot(document.getElementById('root'));

const numbers = [1, 2, 3, 4, 5];

// const NumberElems = numbers.map(num => {
//   // <li>{num}</li>;
//   return <li>{num}</li>;
// });

// console.log(NumberElems);

const element = <NumbersList numbers={numbers} />;

root.render(element);
