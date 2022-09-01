import React from 'react';

function CartTitle({ count, userName }) {
  return (
    <div className="cart-title">{`${userName}, you added ${count} items`}</div>
  );
}

export default CartTitle;

// В файле src/CartTitle.jsx, опиши компоненту,
// которая принимает количество товаров в корзине в свойстве count
// и имя пользователя в свойстве userName,
// и отображает текст John, you added 7 items, где John - имя, 7 - count
