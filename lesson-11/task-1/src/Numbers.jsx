import React from 'react';
import PropTypes from 'prop-types';

class Numbers extends React.PureComponent {
  // shouldComponentUpdate(nextProps) {
  //   if (
  //     this.props.number === nextProps.number &&
  //     this.props.title === nextProps.title
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return (
      <div className="number">
        <span className="number__title">{this.props.title}</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: 'Some number',
};

// !!!
// userData = { name: 'Tom', age: 17}
// если поменять 17 на 18, то компонента не поменяется,
// потому что ссылка та же самая
export default Numbers;
