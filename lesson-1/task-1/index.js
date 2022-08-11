/* eslint-disable no-undef */

// <div class="greeting">Hello, React!></div>

// // императивный подход
// const rootElement = document.querySelector('#root');
// const greetingElem = document.createElement('div');
// greetingElem.classList.add('greeting');
// greetingElem.textContent = 'Hello, React!';

// rootElement.append(greetingElem);

// =================================== //

// with REACT
const rootElement = document.querySelector('#root');

const greetingElem = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, React!',
);

ReactDOM.render(greetingElem, rootElement);
