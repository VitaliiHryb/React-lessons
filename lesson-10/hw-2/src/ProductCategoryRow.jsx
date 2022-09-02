import React from 'react';

// ProductCategoryRow (turquoise): displays a heading for each category

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

export default ProductCategoryRow;
