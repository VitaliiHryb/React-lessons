import React from 'react';
// import { useParams } from 'react-router-dom';

const Product = ({ match }) => {
  return <div className="page__content">{match.params.productId}</div>;
};

export default Product;

// "TypeError: Cannot read property 'textContent' of null\n

// hope it is it
// {`product is a ${match.params.productId}`}

/*
const Product = ({ match }) => {
  return (
    <div className="page__content">
      {`Product is a ${match.params.productId}`}
    </div>
  );
};
*/

// with Hooks
/*
const Product = () => {
  const { productId } = useParams();
  return <div className="page__content">{`Product is a ${productId}`}</div>;
};
*/
