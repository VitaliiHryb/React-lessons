import React from 'react';

const Product = ({ ...rest }) => {
  console.log(rest);
  return (
    <div className="page__content">
      <p>Product</p>
    </div>
  );
};

export default Product;
