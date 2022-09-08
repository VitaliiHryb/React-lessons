import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Product from './Product';

function Products() {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
      </ul>
      <Routes>
        <Route
          path="/products/*"
          element={<span>Select a product please</span>}
        />
        <Route exact path="/products/:productId" component={<Product />} />
      </Routes>
    </div>
  );
}

export default Products;
