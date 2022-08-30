import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  createUser = userProfile => {
    console.log(userProfile);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
