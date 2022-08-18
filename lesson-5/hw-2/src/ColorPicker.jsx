import React, { Component } from 'react';
import './index.scss';

/* <div>
  <div class="picker__title">Red</div>
  <div>
    <button class="picker__button picker__button_coral"></button>
    <button class="picker__button picker__button_aqua"></button>
    <button class="picker__button picker__button_bisque"></button>
  </div>
</div>; */

// coral, aqua, bisque.
const CORAL = 'coral';
const AQUA = 'aqua';
const BISQUE = 'bisque';

document.querySelector('picker__button').style.backgroundColor = color;

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isCoral: false,
      isAqua: false,
      isBisque: false,
      isColor: false,
    };
    //this.toggler = this.toggler.bind(this);
  }

  btnPicker = () => {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
  };

  render() {
    return (
      <div>
        <div class="picker__title">{btnPicker()}</div>
        <div>
          <button
            class="picker__button picker__button_coral"
            onMouseover={(this.state.isCoral = true)}
          ></button>
          <button
            class="picker__button picker__button_aqua"
            onMouseover={(this.state.isAqua = true)}
          ></button>
          <button
            class="picker__button picker__button_bisque"
            onMouseover={(this.state.isBisque = true)}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

// // option 2
// result
// class Toggler extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isOff: false,
//     };
//   }

//   toggler = () => {
//     this.setState({
//       isOff: !this.state.isOff,
//     });
//   };

//   render() {
//     return (
//       <button onClick={this.toggler} className="toggler">
//         {this.state.isOff ? 'On' : 'Off'}
//       </button>
//     );
//   }
// }

// export default Toggler;
