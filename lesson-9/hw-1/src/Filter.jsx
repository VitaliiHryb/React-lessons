import React from 'react';

const Filter = props => {
  return (
    <div className="filter">
      <span className="filter__count">{props.count}</span>
      <input
        type="text"
        className="filter__input"
        onChange={props.onChange}
        value={props.filterText}
      />
    </div>
  );
};

export default Filter;

// input: filterText - текст, по которому происходит фильтрация пользователей,
// count - к-во найденых пользователей, onChange - колбек,
// который передает изменения из инпута в компоненту UsersList.

// output: Filter отображает счетчик найденых пользователей и текстовое поле ввода
