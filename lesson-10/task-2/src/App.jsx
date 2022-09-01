import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'John',
      lastName: 'Doe',
    },
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };

  render() {
    const { userData } = this.state;

    return (
      <div className="page">
        <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
        <main className="content">
          <ShoppingCart userData={userData} />
          <Profile userData={userData} handleChange={this.handleChange} />
        </main>
      </div>
    );
  }
}

export default App;

// В файле src/App.jsx, опиши компоненту, которая содержит поле ввода для текста
// и кнопку поиска

//В файле src/App.jsx, опиши компоненту,
// которая хранит в состоянии объект пользователя.
// App должна отрисовать ShoppingCart и Profile,
// а так же заголовок с текстом Hello, John Doe,
// где John - имя пользователя, Doe - фамилия.
