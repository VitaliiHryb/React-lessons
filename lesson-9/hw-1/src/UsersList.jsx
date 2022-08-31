/*
<div>
  <div className="filter">
    <span className="filter__count">5</span>
    <input type="text" className="filter__input" value="a" />
  </div>
  <ul className="users">
    <li className="user"><span className="user__name">Tad</span><span className="user__age">18</span></li>
    <!-- ... -->
    <li className="user"><span className="user__name">Anna</span><span className="user__age">45</span></li>
  </ul>
</div>
*/
import React from 'react';
import Filter from './Filter';
import User from './User';

class UsersList extends React.Component {
  state = {
    searchValue: '',
  };

  handler = event => {
    this.setState({
      searchValue: event.target.value,
    });
  };

  render() {
    let users = [...this.props.users];
    if (this.state.searchValue) {
      users = users.filter(
        ({ name }) =>
          name.toLowerCase().indexOf(this.state.searchValue.toLowerCase()) !==
          -1,
      );
    }

    users = users.map(({ id, ...user }) => <User key={id} {...user} />);

    return (
      <div>
        <Filter
          filterText={this.state.searchValue}
          count={users.lendth}
          onChange={this.handler}
        />
        <ul className="users">{users}</ul>
      </div>
    );
  }
}

export default UsersList;

// input: список пользователей в свойстве users
// output: отображает поле для фильтрации и список пользователей

// UsersList должна отображать только тех пользователей,
// имя которых содержит текст из поля фильтрации (игнорируя регистр)

// Состояние должно храниться в компоненте UsersList
