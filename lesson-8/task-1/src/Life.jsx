import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);

    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate() {
    console.log(
      'shouldComponentUpdate(nextProps, nextState): decide to render or not to render',
    );
    return true;
  }

  componentDidUpdate() {
    console.log(
      'componentDidUpdate(prevProps, prevState): some updates based on new props',
    );
  }

  componentWillUnmount() {
    console.log(
      'componentWillUnmount(): cleanup before DOM related to component will be removed',
    );
  }

  render() {
    console.log('return React element to build DOM');

    return <div>1</div>;
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

// class Life extends Component {
//   constructor(props) {
//     super(props);
//     console.log('constructor: good place to create state');
//   }

//   componentDidMount() {
//     console.log('componentDidMount: API calls, subscriptions');
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     // this.props, this.state
//     console.log(nextProps, nextState);
//     console.log(
//       'shouldComponentUpdate(nextProps, nextState): decide to render or not to render',
//     );
//     return nextProps.number % 2;
//   }

//   componentDidUpdate(prevProps, prevState) {
//     // this.props => будем работать с новыми props
//     // console.log(prevProps);
//     console.log(
//       'componentDidUpdate(prevProps, prevState): some updates based on new props',
//     );
//   }

//   componentWillUnmount() {
//     console.log(
//       'componentWillUnmount(): cleanup before DOM related to component will be removed',
//     );
//   }

//   render() {
//     console.log('return React element to build DOM');
//     return <div className="number">{this.props.number}</div>;
//   }
// }
