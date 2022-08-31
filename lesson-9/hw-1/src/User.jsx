import React from 'react';

const User = props => {
  return (
    <li className="user">
      <span className="user__name">{props.name}</span>
      <span className="user__age">{props.age}</span>
    </li>
  );
};

export default User;

// input: name и age.
// output: Отрисовывает данные пользователя
