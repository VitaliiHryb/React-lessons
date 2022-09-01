import React from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends React.Component {
  state = {
    userData: {
      firstName: 'Tom',
      lastName: 'Form',
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
          <ShoppingCart userData={this.state.userData} />
          <Profile
            userData={this.state.userData}
            handleChange={this.handleChange}
          />
        </main>
      </div>
    );
  }
}

export default App;

/*
<!-- App -->
<div class="page">
  <h1 class="title">Hello, John Doe</h1>
  <main class="content">
    <!-- ShoppingCart -->
    <div class="column">
      <!-- CartTitle -->
      <div class="cart-title">John, you added 2 items</div>
      <!-- ProductsList -->
      <div class="products">
        <ul class="products__list">
          <li class="products__list-item">
            <span class="products__item-name">iPhone 11</span>
            <span class="products__item-price">$999</span>
          </li>
          <li class="products__list-item">
            <span class="products__item-name">iPad Pro</span>
            <span class="products__item-price">$799</span>
          </li>
        </ul>
        <div class="products__total">Total: $1798</div>
      </div>
    </div>
    <!-- Profile -->
    <div class="column">
      <!-- UserForm -->
      <form class="user-form">
        <input type="text" name="firstName" class="user-form__input" value="John" />
        <input type="text" name="lastName" class="user-form__input" value="Doe" />
      </form>
    </div>
  </main>
</div>
*/
