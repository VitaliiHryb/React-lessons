import React from 'react';

const NumbersList = ({ numbers }) => {
  return (
    <ul>
      {numbers.map(num => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
};

export default NumbersList;

// const NumbersList = props => {
//   const { numbers } = props;
//   const NumberElems = numbers.map(num => <li>{num}</li>);
//   const element = <ul>{NumberElems}</ul>;

//   return element;
// };
