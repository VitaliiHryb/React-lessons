import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// const text1 = 'Hello, world!';
// const text2 = 'Another exciting text.';

class Status extends Component {
  state = {
    isOnline: false,
  };

  setText = isOnline => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline />}
      </div>
    );
  }
}

export default Status;
