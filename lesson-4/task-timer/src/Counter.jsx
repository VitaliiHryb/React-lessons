import React, { Component } from 'react';
import './counter.scss';

// let counter = 0;
// setInterval(() => {
//   counter += 1;
//   // console.log(counter);
// }, 1000);

// const Counter = () => {
//   return <div>{counter}</div>;
// };

// что бы переделать функциональную компоненту в классовую

class Counter extends Component {
  constructor(props) {
    super(props); // если мы наследуем от какого-то класса, мы должны вызвать родительский конструктор
    // здесь мы и храним те данные,
    // которые нам нужны для отрисовки какой то части экрана
    this.state = {
      counter: props.start,
    };

    // Обычно такие конструкции не используют в конструкторе
    setInterval(() => {
      // setState обновляет компоненту //запускает перерэндер компонент
      this.setState({
        counter: this.state.counter + 1,
      });
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}

export default Counter;
