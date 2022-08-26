import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    sorting: null,
  };

  toggleSorting = () => {
    const newSorting = this.state.sorting === 'asc' ? 'desc' : 'asc';
    this.setState({
      sorting: newSorting,
    });
  };

  render() {
    let UsersList;
    if (this.state.sorting) {
      UsersList = this.props.users.sort((a, b) =>
        this.state.sorting === 'asc' ? a.age - b.age : b.age - a.age,
      );
    } else {
      UsersList = this.props.users;
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleSorting}>
          {this.state.sorting || '-'}
        </button>

        <ul className="users">
          {UsersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

// <User key={user.id} name={user.name} age={user.age} />
// ===
// <User key={user.id} {...user} />

// const UsersList = ({ users }) => {
//   return (
//     <div>
//       <button className="btn" onClick={set}>
//         -
//       </button>

//       <ul className="users">
//         {users.map(user => (
//           <User key={user.id} {...user} />
//         ))}
//       </ul>
//     </div>
//   );
// };
