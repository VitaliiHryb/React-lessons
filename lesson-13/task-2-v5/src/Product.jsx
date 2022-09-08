import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return <div className="page__content">{`Product is a ${productId}`}</div>;
};

export default Product;

/*
const Product = ({ match }) => {
  return (
    <div className="page__content">
      {`Product is a ${match.params.productId}`}
    </div>
  );
};
*/
