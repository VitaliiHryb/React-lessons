import React from 'react';
import CartTitle from './CartTitle';
import ProductsList from './ProductsList';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          id: '1',
          name: 'iPhone 11',
          price: 999,
        },
        {
          id: '2',
          name: 'iPad 1Pro',
          price: 799,
        },
      ],
    };
  }

  render() {
    const count = this.state.cartItems.length;
    const { userName } = this.props;
    // console.log(userData);
    return (
      <div className="column">
        <CartTitle userName={userName} count={count} />
        <ProductsList cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default ShoppingCart;

// В файле src/ShoppingCart.jsx, опиши компоненту,
// которая принимает имя пользователя в свойстве userName
// и хранит в состоянии массив товаров. App.
// ShoppingCart должна отрисовать CartTitle и ProductsList
