import React from 'react';
import Counter from './Counter';

// const App = () => {
//   return <div className="counter">17</div>;
// };

const App = () => {
  return (
    <>
      <Counter start={0} interval={6000} />
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={100} />
    </>
  );
};

export default App;
