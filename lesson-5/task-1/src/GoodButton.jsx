import React, { Component } from 'react';

// class GoodButton extends React.Component
class GoodButton extends Component {
  handleClick(e) {
    // console.log(e); // got Synthetic event
    console.log(e.target.textContent);
    console.log(e);
    console.log(e.screenX);

    alert('Good job!');
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

// const GoodButton = () => (
//   <button className="fancy-button" onClick={() => alert('Good job!')}>
//     Click me!
//   </button>
// );

export default GoodButton;
