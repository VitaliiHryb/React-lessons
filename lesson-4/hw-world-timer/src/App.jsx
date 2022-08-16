// Компонента из src/App.jsx должна отрисовать три компоненты src/Clock.jsx
// для разных городов

// Как пример - London (смещение 0), Kyiv (смещение 2), New York (смещение -5)

// Для расчета времени с заданным смещением относительно нулевого меридиана
// используйте ф-цию getTimeWithOffset
import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'London'} offset={0} />
      <Clock location={'Kyiv'} offset={2} />
      <Clock location={'New York'} offset={-5} />
    </>
  );
};

export default App;
