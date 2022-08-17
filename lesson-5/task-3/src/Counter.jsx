import React, { Component } from 'react';

// class GoodButton extends React.Component
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.decrement = this.decrement.bind(this);
    // this.increment = this.increment.bind(this);
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  // increment() {
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="counter">
        <button className="counter__button" onClick={this.decrement}>
          -
        </button>
        <span className="counter__value">{this.state.counter}</span>
        <button className="counter__button" onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

export default Counter;
