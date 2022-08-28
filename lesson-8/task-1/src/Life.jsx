import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('=> constructor');
  }

  componentDidMount() {
    console.log('=> componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // this.props, this.state
    console.log(nextProps, nextState);
    console.log('=> shouldComponentUpdate');
    return nextProps.number % 2;
  }

  componentDidUpdate(prevProps, prevState) {
    // this.props => будем работать с новыми props
    console.log(prevProps);
    console.log('=> componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('=> componentWillUnmount');
  }

  render() {
    console.log('=> render');
    return <div className="number">{this.props.number}</div>;
  }
}

export default Life;

// MOUNTING
// constructor - метод жизненого цикла, который отрабатывает при инициализации
// p.s. когда компонента создается
// render()
// componentDidMount()

// UPDATE
// shouldComponentUpdate существует для оптимизации
// отрисовуем только не парные (в нашем примере)
// render()
// componentDidUpdate()

// UNMOUNTING
// componentWillUnmount()

// Пользовательские методы обьявляем между render() и Методами жизненого цикла
