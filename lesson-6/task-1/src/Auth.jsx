import React, { Component } from 'react';
import Greeting from './Greeting';
import Logout from './Logout';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>
          {this.state.isLoggedIn ? (
            <Logout onLogout={this.handleLogout} />
          ) : (
            <Login onLogin={this.handleLogin} />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;

// render() {
//     return (
//       <div className="panel">
//         <Greeting isLoggedIn={this.state.isLoggedIn} />
//         {this.state.isLoggedIn ? (
//           <button className="btn logout" onClick={this.handleLogout}>
//             Logout
//           </button>
//         ) : (
//           <button className="btn login" onClick={this.handleLogin}>
//             Login
//           </button>
//         )}
//       </div>
//     );
//   }

// render() {
//     let button = this.state.isLoggedIn ? (
//       <button onClick={this.handleLogout}>Logout</button>
//     ) : (
//       <button onClick={this.handleLogin}>Login</button>
//     );

//     // if (this.state.isLoggedIn) {
//     //   button = <button onClick={this.handleLogout}>Logout</button>;
//     // } else {
//     //   button = <button onClick={this.handleLogin}>Login</button>;
//     // }

//     return (
//       <div className="panel">
//         <Greeting isLoggedIn={this.state.isLoggedIn} />
//         <div>{button}</div>
//       </div>
//     );
//   }
