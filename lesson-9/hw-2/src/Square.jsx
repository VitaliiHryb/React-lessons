import React from 'react';

// Компонент Square рендерить окремий елемент <button>

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
