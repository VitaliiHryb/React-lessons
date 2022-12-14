import React from 'react';

function ProductsList({ cartItems }) {
  let total = cartItems.reduce((acc, { price }) => (acc += price), 0);
  const items = cartItems.map(({ id, name, price }) => {
    return (
      <li key={id} className="products__list-item">
        <span className="products__item-name">{name}</span>
        <span className="products__item-price">{`$${price}`}</span>
      </li>
    );
  });

  return (
    <div className="products">
      <ul className="products__list">{items}</ul>
      <div className="products__total">{`Total: $${total}`}</div>
    </div>
  );
}

export default ProductsList;

// В файле src/ProductsList.jsx, опиши компоненту,
// которая принимает массив товаров в свойстве cartItems
// ([{ id: '2', name: 'iPad Pro', price: 799 }, ...])
// и отображает список товаров и total под ним.
