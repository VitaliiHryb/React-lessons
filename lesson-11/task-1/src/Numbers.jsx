import React from 'react';

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
// !!!
// userData = { name: 'Tom', age: 17}
// если поменять 17 на 18, то компонента не поменяется,
// потому что ссылка та же самая
export default Numbers;
