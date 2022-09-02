import React from 'react';

// ProductCategoryRow (turquoise): displays a heading for each category

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;
