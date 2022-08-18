import React, { Component } from 'react';
import './index.scss';

// <div class="toggler">*On/Off status here*</div>

class Toggler extends Component {
  constructor(props) {
    super(props);

    this.state = { isToggleOn: false };
    this.toggler = this.toggler.bind(this);
  }

  toggler() {
    this.setState(prevState => ({ isToggleOn: !prevState.isToggleOn }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.toggler}>
        {this.state.isToggleOn ? 'On' : 'Off'}
      </div>
    );
  }
}

export default Toggler;

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
