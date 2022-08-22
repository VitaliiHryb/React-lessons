import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

function Status(props) {
  return (
    <div className="status">{props.isOnline ? <Online /> : <Offline />}</div>
  );
}

export default Status;

// class Status extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOnline: false,
//     };
//   }

//   setText = isOnline => {
//     this.setState({
//       isOnline: true,
//     });
//   };

//   render() {
//     return (
//       <div className="status">
//         {this.state.isOnline ? <Online /> : <Offline />}
//       </div>
//     );
//   }
// }
